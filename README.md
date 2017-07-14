#### React 脚手架
> 基于antd开发的一个脚手架，致力于开发一个通用的后台系统脚手架。

> 个人不希望项目配置搞的过于复杂难懂，而是希望各位根据实际业务来调整，所以很多配置化都会基于简单 & 灵活 & 扩展性高 为最基标准。

#### mock服务

http://rapapi.org/platform/home.do 可以试试这个，好像不错。


#### 目录结构
``` shell
├── dist                          # 项目输出目录
├── config                        # webpack配置文件
│   ├── webpack.config.dev.js     # 开发环境配置
│   └── webpack.config.prod.js    # 生产环境配置
├── public                        # 公共资源
├── src                           # 项目源码目录
│ ├──├── components               # UI组件及UI相关方法
│ │  ├── skin.less                # 全局样式
│ │  └── vars.less                # 全局样式变量
│ ├── route.js                    # 路由配置
│ ├── index.js                    # 入口文件js
│ └── index.html                  # 载入点
├── .babelrc      
├── .eslintrc.js                
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```
