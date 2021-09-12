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
```
"dependencies": {
    "yargs": "^17.1.1",
    "@mylerna/cli":"^0.0.0",
    "@mylerna/init":"^0.0.0",
    "@mylerna/create":"^0.0.0"
  }
```  


## `link` 链接依赖
在我们的mylerna包中执行依赖链接
```
 lerna link 
```
此时node_modules新增 @mylerna文件，包含 cli/create/init 软链接
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
### `publishConfig` 修改为公服
```
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  },
```
### 登录并创建npm组织
[登录并创建](https://www.npmjs.com/org/create)
举例：创建组织**frontendplayground**
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33101cded29e46debc768093f064623c~tplv-k3u1fbpfcp-watermark.image)
### 
若无修改或者提交则会提示：
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3faa4cd206f24224aa6a35f784f0cc74~tplv-k3u1fbpfcp-watermark.image)

发布时会提示让你选择**Patch Minor Major**等版本类型的选择：
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d95bc25375041d9b2f71faeeda6608b~tplv-k3u1fbpfcp-watermark.image)

演示项目为固定模式，此时packages下的所有包都统一升级为:`^0.1.0`
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93dfcb5755fb4d7da05a170091a35c62~tplv-k3u1fbpfcp-watermark.image)

