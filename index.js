
'use strict';

module.exports = {
  parser: "babel-eslint",
	rules: {
		"camelcase": 0,
    "max-len": [2, { code: 120 }],
    "no-tabs": 0,
    "quotes": [2, "single"],
    "no-var": 2,
    "object-shorthand": [1, "always"],
    "no-array-constructor": 2,
    "no-new-object": 2,
    "prefer-destructuring": 2,
    "no-iterator": 2,
    "no-whitespace-before-property": 2,
    "no-else-return": 2,
    "no-lonely-if": 2,
    "radix": 2,
    "no-new-wrappers": 2,
    "object-curly-spacing": [2, "always", {
      "arraysInObjects": false,
      "objectsInObjects": false,
    }], 
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
	}
}