'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  initializing () {
    this.composeWith(require.resolve('../javascript'))
  }

  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Generating the ${chalk.red('MetaMask standard app')} project files!`
      )
    )
  }
}
