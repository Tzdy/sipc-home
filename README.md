## tree
```
.
├── package.json 
├── package-lock.json
├── script
│   ├── dev.js  开发环境配置
│   ├── index.js
│   └── prod.js  生产环境配置  
├── sequelize-cli  详情查看sequelize Orm框架文档
│   ├── config  数据库初始化配置文件
│   ├── migrations
│   └── models
├── src
│   ├── Controller
│   ├── Domain
│   ├── main.ts
│   ├── Middleware
│   ├── Model
│   ├── Router
│   ├── Service
│   └── Utils
└── tsconfig.json
```

## quick start
```
npm install --registry=https://registry.npm.taobao.org
npm run dev
```

## production env
```
npm npm install --registry=https://registry.npm.taobao.org
npm run prod
```