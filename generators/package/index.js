"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the riveting ${chalk.red("metamask package")} generator!`
      )
    );

    const prompts = [
      // {
      //   type: "confirm",
      //   name: "someAnswer",
      //   message: "Would you like to enable this option?",
      //   default: true
      // }
    ];

    // To access props later use this.props.someAnswer;
    this.props = await this.prompt(prompts);
  }

  writing() {
    this.fs.copy(this.templatePath("**/*"), this.destinationRoot(), {
      globOptions: { dot: true }
    });
  }

  install() {
    // This.installDependencies();
  }
};
