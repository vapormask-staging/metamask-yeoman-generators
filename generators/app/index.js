'use strict'

const Generator = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')

// "app" is yeoman's default generator
module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Pick a generator.
        Try ${chalk.red('yo mm:package')}
        to create an npm package project`
      )
    )
  }
}
