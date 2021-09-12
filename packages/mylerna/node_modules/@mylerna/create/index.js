const path = require('path')
const fs = require('fs-extra') // fs
const execa = require('execa') // child_proces
const initPackageJson = require('pify')(require('init-package-json')) // pify 把一个回调方式改为promise方式
class CreateCommand {
  constructor(options) {
    this.options = options
    this.rootPath = path.resolve()
  }
  async execute() {
    // name=xxx  registry=私服地址
    const { name, registry } = this.options
    const targetDir = path.join(this.rootPath, `packages/${name}`)
    this.libDir = path.join(targetDir, `lib`)
    this.testDir = path.join(targetDir, `__test__`)

    await fs.mkdirp(this.libDir)
    await fs.mkdirp(this.testDir)
    // init-package-json弹出选项，让我们填写json信息

    await initPackageJson(targetDir, '')
    console.info('', 'Initialized Lerna files')
  }
}

function factory(argv) {
  new CreateCommand(argv).execute()
}

module.exports = factory
