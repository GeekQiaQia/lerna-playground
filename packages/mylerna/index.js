// 拿到cli依赖
const cli = require('@frontendplayer/cli')
const initCmd = require('@frontendplayer/init/command')
const createCmd = require('@frontendplayer/create/command')

function main(argv) {
  // cli返回的是 yargs的实例
  // 配置init命令
  // 解析执行
  return cli().command(initCmd).command(createCmd).parse(argv)
}
module.exports = main
