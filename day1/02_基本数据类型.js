//声明一个变量a，同时制定它的基本类型为number
// a的类型设置为了number，在以后的使用过程中a只能是数字
var a;
a = 10;
a = 20;
// 报错，不能将类型“string”分配给类型“number”
// 报错仍会编译成js文件
// a = 'hello';
var b;
b = 'hello';
// 声明并赋值
var c = true;
// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
var d = false;
// 报错
// d = 123;
// 函数声明
// 函数sum()后面的为return值声明类型
function sum(a, b) {
    return a + b;
}
