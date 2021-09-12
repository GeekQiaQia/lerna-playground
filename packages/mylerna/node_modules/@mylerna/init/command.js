exports.command = 'init'
exports.describe = '创建一个lerna仓库'
exports.builder = (yargs) => {
  console.log('init builders', yargs)
}

// init命令真正的处理逻辑
exports.handler = (argv) => {
  return require('.')(argv)
}
