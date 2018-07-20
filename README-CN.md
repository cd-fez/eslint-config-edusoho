# eslint-config-edusoho

[Englise](/README.md)

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
