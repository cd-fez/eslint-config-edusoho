# eslint-config-edusoho

[中文](/README-CN.md)

## Installation

```
// npm
$ npm install --save-dev eslint eslint-config-edusoho

// yarn
$ yarn add -D eslint eslint-config-edusoho
```


## Basic usage

Once the `eslint-config-edusoho` package is installed, you can use it by seting the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring) as `edusoho`

```js
{
  "extends": "edusoho",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### 【Recommend to use】Using the `edusoho` config with `eslint:recommended`

There are some default rules in the [`eslint:recommended`](http://eslint.org/docs/rules/) that Edusoho's do not cantain

To use Edusoho style with ESLint's recommended, extending them both, making sure to list `edusoho` last:

```js
{
  "extends": ["eslint:recommended", "edusoo"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

### custom setting

If you don't want to use the default rules, specifying rules what you want in the [rules] section of your [Eslint], which will replace the style of [extends].

```js
{
  "extends": ["eslint:recommended", "edusoo"],
  "rules": {
    "camelcase": 0,
    "max-len": [2, { code: 120 }],
    "no-tabs": 0,
    "quotes": [2, "single"],
  }
}
```
