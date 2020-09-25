"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-mm-package:javascript", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/javascript"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    const expected = [".github/workflows/nodejs.yml"];

    assert.file(expected);
  });
});
