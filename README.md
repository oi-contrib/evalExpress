# [evalExpress](https://github.com/oi-contrib/evalExpress)
一个字符串表达式解析和求解运行库

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=eval-express&interval=7">
        <img src="https://img.shields.io/npm/dm/eval-express.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/eval-express">
        <img src="https://img.shields.io/npm/v/eval-express.svg" alt="npm">
    </a>
    <a href="https://github.com/oi-contrib/evalExpress" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/oi-contrib/evalExpress?style=social">
    </a>
</p>

<img src="https://nodei.co/npm/eval-express.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

## 如何使用？

```
npm install --save eval-express
```

然后就可以引入需要的方法：

```js
 import { evalExpress, getValue, setValue } from "eval-express";
 ```

### evalExpress

解析对象上字符串表达式：

```js
var value=evalExpress(target, express, scope = {});
```

在指定对象target上求解表达式express的值，一个可选参数scope表示，如果scope有值，会拦截target，下同。

比如 现在有个json：

```js
var json = {
    "a": {
        "b": [1, 2, 3]
    }
};
```

那么执行下面的语句：

```js
var result = evalExpress(json, 'a.b[0]-10');
```

结果result值就是：`-9`。

### getValue

获取对象上字符串表达式对应的值：

```js
var value=getValue(target, express, scope = {});
```

比如，现在有个json：

```js
var json = {
    "a": {
        "b": [1, { "d": "value" }, 3, 4]
    }
};
```

那么执行下面的语句：

```js
var result = getValue(json, '["a"].b');
```

结果result值就是：`[1, { "d": "value" }, 3, 4]`。

### setValue

设置对象上字符串表达式对应的值：

```js
var newTarget=setValue(target, express, value, scope = {});
```

虽然会返回新的值，不过旧的值也同步修改了。

比如，现在有个json：

```js
var json = {
    "key" : [1, 2, 3]
};
```

那么执行下面的语句：

```js
setValue(json, '.key[1]','newValue');
```

此时，原来的json的值就变成了：

```js
{
    "key" : [1, "newValue", 3]
}
```

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步