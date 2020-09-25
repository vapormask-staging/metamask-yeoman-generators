'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-mm-package:package', () => {

  it('run with options', async () => {
    await helpers
      .run(path.join(__dirname, '../generators/package'))
      .withOptions({ typescript: false })

    assert.file([
      '.github/workflows/nodejs.yml',
      '.eslintrc.js',
      'jest.config.js',
    ])
  })

  it('run with prompts', async () => {
    await helpers
      .run(path.join(__dirname, '../generators/package'))
      .withPrompts({ typescript: true })

    assert.file([
      '.github/workflows/nodejs.yml',
      '.eslintrc.js',
      'jest.config.js',
    ])
  })
})
