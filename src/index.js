import analyseExpress from './analyseExpress.js';
import toPath from './toPath.js';
import calcValue from './value.js';

/**
 * express举例子：
 *
 * [00]  ["a"].b[c]
 * [01]  a
 * [02]  [0]['value-index'][index+1]
 *
 * 如果是getValue,express还可以包含运算符：
 *  + - * / %  数值运算符
 *  && || !    逻辑运算符
 *
 * [03]  flag+10
 * [04]  a.b[index+1]-10
 * [05]  (a+b)/10-c[d]
 * [06]  [((a+b)-c)*f]+d
 *
 * [07]  !flag
 * [08]  (a>0 && b<=1) || !flag
 * [09]  '(flag)' == "("+temp+")"
 * [10]  a>10?"flag1":"flag2"
 *
 */

// 解析一段表达式
export var evalExpress = function (target, express, scope) {
    if (arguments.length < 3) scope = {};

    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);

    // 如果不是表达式
    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);

    return path[0];
};

// 获取
export var getValue = function (target, express, scope) {
    if (arguments.length < 3) scope = {};

    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
};

// 设置
export var setValue = function (target, express, value, scope) {
    if (arguments.length < 4) scope = {};

    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);

    var _target = target;
    for (var i = 0; i < path.length - 1; i++) {

        // 如果需要补充
        if (!(path[i] in _target)) _target[path[i]] = Array.isArray(_target) ? [] : {};

        // 拼接下一个
        _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
};
