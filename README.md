# eslint-config-edusoho

[中文]("/README-CN.md")

## Installation

```
$ npm install --save-dev eslint eslint-config-edusoho
```


## Basic usage

Once the `eslint-config-edusoho` package is installed, you can use it by specifying `edusoho` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "edusoho",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### 【recommend to use】Using the `edusoho` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Google style is not opinionated about that you might want to enforce in your project.

To use Google style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `edusoho` last:

```js
{
  "extends": ["eslint:recommended", "edusoo"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
