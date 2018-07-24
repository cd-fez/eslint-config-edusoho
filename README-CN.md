# eslint-config-edusoho

[English](/README.md)

## Installation

```
$ npm install --save-dev eslint eslint-config-edusoho
```


## Basic usage

下载`eslint-config-edusoho`包后，在.eslintrc.js中，将[`extends`](https://eslint.cn/docs/user-guide/configuring#extending-configuration-files)赋值为`edusoho`
Once the `eslint-config-edusoho` package is installed, you can use it by 

[这里](http://eslint.cn/docs/user-guide/configuring)可以查看eslint的配置参数介绍

```js
{
  "extends": "edusoho",
  "rules": {
    // 自定义配置
  }
}
```

### 【推荐使用】`edusoho`和`eslint:recommended`结合使用

[`eslint:recommended`](http://eslint.cn/docs/rules/)有自己的一套规范，`edusoho`也可以和`eslint:recommended`一起应用到你的项目中去：

```js
{
  "extends": ["eslint:recommended", "edusoo"],
  "rules": {
    // 自定义配置
  }
}
```

### 自定义设置

如果你不想使用默认的规则，你可以把你想要的规则配置到[eslint]的[rules]部分中，并且[rules]中的规则会覆盖掉[extends]中的

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
