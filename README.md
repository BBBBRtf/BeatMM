# BeatMM - 缅甸最潮DJ音乐社区

![BeatMM Logo](icons/icon-512x512.png)

## 项目简介

BeatMM 是一个专为缅甸音乐爱好者打造的现代化DJ音乐社区平台。用户可以在这里发现最新最热的DJ音乐，与音乐爱好者互动交流，分享自己的音乐作品，观看DJ现场表演等。

## 主要功能

### 🎵 音乐发现
- 热门音乐推荐
- 分类浏览（电子音乐、流行音乐、传统音乐等）
- 个性化推荐算法
- 音乐搜索功能

### 👥 社交互动
- 用户注册和登录
- 个人资料管理
- 关注和粉丝系统
- 音乐评论和点赞

### 🎧 音乐播放
- 在线音乐播放器
- 播放列表管理
- 收藏功能
- 播放历史记录

### 📤 内容创作
- 音乐上传功能
- 音乐信息编辑
- 封面图片上传
- 音乐分享

### 📺 直播功能
- DJ现场表演
- 实时互动聊天
- 直播间管理
- 观众打赏系统

### 💎 VIP会员
- 高品质音乐下载
- 无广告体验
- 专属内容访问
- 优先客服支持

### 🏆 积分系统
- 每日签到奖励
- 任务完成奖励
- 音乐上传奖励
- 社交互动奖励

## 技术特性

### 🌐 PWA支持
- 离线访问功能
- 桌面应用体验
- 推送通知
- 自动更新

### 📱 响应式设计
- 移动端优化
- 平板适配
- 桌面端支持
- 触摸友好界面

### 🎨 现代化UI
- 玻璃质感设计
- 动态背景效果
- 流畅动画过渡
- 深色主题

### 🔒 数据安全
- 本地数据存储
- 用户隐私保护
- 安全认证机制
- 数据加密传输

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: CSS Grid, Flexbox, CSS Variables
- **PWA**: Service Worker, Web App Manifest
- **存储**: LocalStorage, IndexedDB
- **图标**: Emoji, Unicode符号
- **部署**: GitHub Pages

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- 移动端浏览器

## 快速开始

### 在线访问
直接访问：[https://your-username.github.io/beatmm-app](https://your-username.github.io/beatmm-app)

### 本地运行
1. 克隆仓库
```bash
git clone https://github.com/your-username/beatmm-app.git
cd beatmm-app
```

2. 启动本地服务器
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

### PWA安装
1. 在支持的浏览器中访问应用
2. 点击地址栏中的"安装"图标
3. 或者点击应用内的"安装 BeatMM 应用"提示

## 项目结构

```
beatmm-app/
├── index.html              # 主页面
├── manifest.json           # PWA配置文件
├── sw.js                   # Service Worker
├── icons/                  # 应用图标
│   ├── icon-192x192.png
│   └── icon-512x512.png
├── screenshots/            # 应用截图
├── README.md              # 项目说明
└── docs/                  # 文档目录
    ├── deployment.md      # 部署指南
    ├── features.md        # 功能说明
    └── api.md            # API文档
```

## 部署指南

### GitHub Pages部署
1. Fork或克隆此仓库
2. 在GitHub仓库设置中启用GitHub Pages
3. 选择源分支（通常是main或gh-pages）
4. 等待部署完成，访问提供的URL

### 自定义域名
1. 在仓库根目录创建CNAME文件
2. 在文件中添加你的域名
3. 在域名DNS设置中添加CNAME记录指向GitHub Pages

## 开发指南

### 代码规范
- 使用ES6+语法
- 遵循语义化HTML
- 使用CSS变量管理主题
- 保持代码注释清晰

### 功能扩展
- 音乐API集成
- 用户认证系统
- 实时聊天功能
- 支付系统集成

### 性能优化
- 图片懒加载
- 代码分割
- 缓存策略优化
- CDN加速

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目主页: [https://github.com/your-username/beatmm-app](https://github.com/your-username/beatmm-app)
- 问题反馈: [Issues](https://github.com/your-username/beatmm-app/issues)
- 邮箱: your-email@example.com

## 致谢

- 感谢所有贡献者的支持
- 感谢开源社区的帮助
- 特别感谢缅甸音乐爱好者的反馈

## 更新日志

### v1.0.0 (2025-06-20)
- 🎉 首次发布
- ✨ 完整的音乐社区功能
- 📱 PWA支持
- 🎨 现代化UI设计
- 🔒 数据安全保护

---

**BeatMM** - 让音乐连接世界 🎵

