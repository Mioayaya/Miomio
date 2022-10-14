# design
- eslint： http://eslint.cn/docs/rules/

# 命名规范
- 文件夹 小写 + `-`
- vue组件 大驼峰 且 首字母+Mio (区分与ui库的组件) 如 MioHomeView、MioHelloWord
- views.vue 页面vue后缀 + View
- ts常量大小
- 方法名、变量 小驼峰
- 异步操作使用 async await
- pinia 命名 useXxStore
- type 命名 Mxxx 
- interfacr 统一在 index.ts 里导出

# src目录结构
- assets 图片管理
  - base64
  - 默认图片链接
- common 常量管理
  - constant ts常量
  - css  less常量
    - common.less  less常量
    - global.less  全局less
- components 通用组件
- route 路由
- server 网络请求
- store 全局变量
  - pinia 新建全局变量，请从这个文件夹下创建
- type 接口
  - interface 类型
  - index.ts 导出文件
- utils 工具函数
- views 视图页面

# tips (须知) ！！！
`通用的组件写入 components里，非通用的 直接在改views文件夹里新建 components子文件夹，以及子 c-views，如test`  

`创建新的分支请从qa拉取，在自己的分支上修改，然后merge到qa上，请勿改动master分支`


