exports.command = 'create <name>'
exports.describe = '创建一个新的lerna 管理的包'
exports.builder = (yargs) => {
  yargs
    .positional('name', {
      // lerna create xxx
      type: 'string',
      description: '包名'
    })
    .options({
      //  lerna create xxxx --registry=http://...
      registry: {
        group: 'Command Groups',
        describe: '配置包的发布仓库地址',
        type: 'string'
      }
    })
}
// init命令真正的处理逻辑
exports.handler = (argv) => {
  return require('.')(argv)
}
