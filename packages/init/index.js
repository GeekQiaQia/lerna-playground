const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
class InitCommand {
  constructor(options) {
    this.options = options
    this.rootPath = path.resolve()
  }
  async execute() {
    await execa('git', ['init'], { stdio: 'pipe' }) // 初始化git仓库
    await this.ensurePackageJSON()
    await this.ensureLernaConfig()
    await this.ensurePackageDir()
    console.info('', 'Initialized Lerna files')
  }

  async ensurePackageJSON() {
    console.info('创建package json')
    await fs.writeJSON(path.join(this.rootPath, 'package.json'), {
      name: 'root',
      private: true,
      devDependencies: {
        lerna: '^4.0.0'
      }
    })
  }
  async ensurePackageDir() {
    console.info('创建packages')
    await fs.mkdirp(path.join(this.rootPath, 'packages'))
  }
  async ensureLernaConfig() {
    console.info('创建lerna config')
    await fs.writeJSON(path.join(this.rootPath, 'lerna.json'), {
      packages: ['packages/*'],
      version: '0.0.0'
    })
  }
}

function factory(argv) {
  new InitCommand(argv).execute()
}

module.exports = factory
