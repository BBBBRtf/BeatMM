const CACHE_NAME = 'beatmm-v1.0.0';
const STATIC_CACHE_NAME = 'beatmm-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'beatmm-dynamic-v1.0.0';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// 需要缓存的动态资源模式
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:css|js)$/,
  /\.(?:mp3|wav|flac|m4a)$/
];

// Service Worker 安装事件
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Service Worker 激活事件
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Service Worker 拦截网络请求
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 跳过非 HTTP(S) 请求
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // 对于导航请求，使用网络优先策略
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // 如果网络请求成功，缓存响应
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => {
          // 网络失败时，从缓存中获取
          return caches.match(request)
            .then(response => {
              return response || caches.match('/');
            });
        })
    );
    return;
  }
  
  // 对于静态资源，使用缓存优先策略
  if (CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          
          // 缓存中没有，从网络获取
          return fetch(request)
            .then(response => {
              // 只缓存成功的响应
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE_NAME)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            })
            .catch(error => {
              console.error('Service Worker: Network request failed', error);
              // 返回离线页面或默认资源
              return new Response('离线模式：无法加载资源', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
    return;
  }
  
  // 对于其他请求，使用网络优先策略
  event.respondWith(
    fetch(request)
      .then(response => {
        // 缓存成功的 GET 请求
        if (request.method === 'GET' && response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // 网络失败时，尝试从缓存获取
        return caches.match(request);
      })
  );
});

// 处理推送通知
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : '您有新的音乐推荐！',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '立即查看',
        icon: '/icons/action-explore.png'
      },
      {
        action: 'close',
        title: '关闭',
        icon: '/icons/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('BeatMM', options)
  );
});

// 处理通知点击事件
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 处理后台同步
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 执行后台同步任务
      syncData()
    );
  }
});

// 同步数据函数
async function syncData() {
  try {
    // 这里可以实现数据同步逻辑
    console.log('Service Worker: Syncing data...');
    
    // 示例：同步用户数据
    const userData = await getStoredUserData();
    if (userData) {
      await syncUserData(userData);
    }
    
    console.log('Service Worker: Data sync completed');
  } catch (error) {
    console.error('Service Worker: Data sync failed', error);
  }
}

// 获取存储的用户数据
async function getStoredUserData() {
  // 从 IndexedDB 或 localStorage 获取数据
  return null;
}

// 同步用户数据到服务器
async function syncUserData(userData) {
  // 实现数据同步逻辑
  return Promise.resolve();
}

// 处理消息事件
self.addEventListener('message', event => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

