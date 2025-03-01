// 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
export var blankReg = new RegExp("[\\x20\\t\\r\\n\\f]");
export var blanksReg = /^[\x20\t\r\n\f]{0,}$/;

export var identifier = /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/;