# `mylerna`

> TODO: description

## Usage

```
const myLerna = require('my-lerna');

// TODO: DEMONSTRATE API
```


## package.json 中添加
```
  "bin":{
    "mylerna":"cli.js"
  },
```
配置bin:在包安装后，执行 link之后，会全局目录添加一个命令 mylerna

## 添加依赖
为避免冲突**@frontendplayer** 为我们自定义npm包组织名称
```
"dependencies": {
    "yargs": "^17.1.1",
    "@frontendplayer/cli":"^0.0.0",
    "@frontendplayer/init":"^0.0.0",
    "@frontendplayer/create":"^0.0.0"
  }
```  


## `link` 链接依赖
在我们的mylerna包中执行依赖链接
```
 lerna link 
```
此时node_modules新增 @frontendplayer文件，包含 cli/create/init 软链接
### 全局link
```
npm link  
```
执行成功如下所示：
```js
added 1 package, and audited 3 packages in 4s

found 0 vulnerabilities
```
查看全局**link**结果
```
npm root -g
// windows下：C:\Program Files\nodejs\node_modules

```
对应目录多出一个**mylerna**的链接包

## `publish`发布
首先需要将项目初始提交到git与远程仓库建立连接;以下以公服为列：
### [登录并创建](https://www.npmjs.com/org/create)npm组织

例：创建组织**frontendplayer**
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/135d0d0f46cd4b3b9e69a19a6991fd26~tplv-k3u1fbpfcp-watermark.image)

创建组织**frontendplayer**
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec7cdd93f1724920980aa62558a3423a~tplv-k3u1fbpfcp-watermark.image)

### `publishConfig` 修改为公服
```
   "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  },
```
### `npm login` 登录 npm
```
npm login 
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f3e0c1effef412d84f7ab383e5daa0a~tplv-k3u1fbpfcp-watermark.image)

### 选择版本
发布时会提示让你选择**Patch Minor Major**等版本类型的选择：

演示项目为固定模式，此时packages下的所有包都统一升级为:`^0.1.0`,如下所示：
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93dfcb5755fb4d7da05a170091a35c62~tplv-k3u1fbpfcp-watermark.image)

发布成功：
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d6e3f6a5ec24ac8b0f04f1de14cc55a~tplv-k3u1fbpfcp-watermark.image)