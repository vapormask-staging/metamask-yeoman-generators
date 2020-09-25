'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-mm-package:package', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/package'))
      .withPrompts({ someAnswer: true })
  })

  it('creates files', () => {
    const expected = ['.github/workflows/nodejs.yml']

    assert.file(expected)
  })
})
