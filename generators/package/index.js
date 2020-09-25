'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const { recursive: merge } = require('merge')
const pkgAdditions = require('./package-additions.json')

module.exports = class extends Generator {
  constructor (...args) {
    super(...args)
    this.option('typescript', {
      desc: 'support typescript',
      alias: 't',
      type: (value) => value === true || value === 'true',
    })
  }

  initializing () {
    this.composeWith(require.resolve('../javascript'))
  }

  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Generating the ${chalk.red(
          'MetaMask standard package'
        )} project files!`
      )
    )

    // Prompt for missing options
    const prompts = [
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Add support for typescript?',
        default: true,
        when: !('typescript' in this.options),
      },
    ]
    const results = await this.prompt(prompts)
    this.props = { ...this.options, ...results }
  }

  writing () {
    // Apply typescript
    if (this.props.typescript === true) {
      // add package scripts
      const currentPkg = this.fs.readJSON(
        this.destinationPath('package.json'),
        {}
      )
      const newPkg = merge(currentPkg, pkgAdditions)
      this.fs.writeJSON(this.destinationPath('package.json'), newPkg)
    }
    // Apply eslint
    this.fs.copyTpl(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js'),
      this.props
    )
    // Apply jest config
    this.fs.copyTpl(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js'),
      this.props
    )
  }
}
