// 1、使用字面量进行类型声明   (枚举)
var a; //只能为10，类似于const
a = 10;
console.log(a);
console.log('------');
var b;
b = 'male';
b = 'female';
console.log(b);
console.log('------');
var c;
c = true;
c = 'hello';
console.log(c);
console.log('------');
// -------------------------------------------------------------------------------------------
// 2.any表示任意类型，一个变量设置为any后相当于对该变量关闭了TS的类型检测
// 隐式的any:声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any
// let d;
var d;
d = 10;
d = true;
d = 'any';
console.log(d);
// -------------------------------------------------------------------------------------------
// 3、unknown表示未知类型的值，实际是一个类型安全的any
// unknown类型的变量，不能直接复制给其他变量
var e;
e = 10;
e = false;
e = 'unknown';
var s;
// d的类型是any，它可以赋值给任意变量，但会造成变量污染，转为其他类型
s = d;
// e的类型是unknown，不能将类型“unknown”分配给类型“string”
// s = e;
// 可以通过增加判断条件
if (typeof (e) === 'string') {
    s = e;
}
// 类型断言：可以用来告诉解析器变量的实际类型
/*
    语法
        变量 as 类型
        <类型>变量
 */
// 写法1
s = e;
// 写法2
s = e;
// -------------------------------------------------------------------------------------------
// 4、void用来表示为空值(undefined)，以函数为例，就表示没有返回值的函数
function fn1() {
}
// -------------------------------------------------------------------------------------------
// 5、never表示永远不会返回结果,一般用来检查错误
function fn2() {
    throw new Error('报错了！！！');
}
