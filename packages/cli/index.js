// 用来解析命令行参数
const yargs = require('yargs/yargs')

function lernaCLI() {
  // 获取命令行参数
  // const argv = process.argv.slice(2)
  const cli = yargs()
  // 所有命令的全局选项；
  const globalOptions = {
    logLevel: {
      type: 'string',
      description: '日志的级别',
      defaultDescription: 'info',
      alas: 'L'
    }
  }
  const globalKeys = Object.keys(globalOptions).concat(['help', 'version'])

  // like  lerna create app --logLevel=info
  return cli
    .options(globalOptions)
    .group(globalKeys, 'Global Options:')
    .usage(`Usage $0 <command> [options]`)
    .demandCommand(1, '至少需要一个命令')
    .strict() // true 严格模式，输入的命令不认识会报错;
    .recommendCommands() // 命令写错后的提示
    .fail((msg, error) => {
      console.log(msg, error)
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .epilogue(`when a command fails ,all logs are written to leran-debug.log in the current working directory`)
}

module.exports = lernaCLI
// 返回cli实例
