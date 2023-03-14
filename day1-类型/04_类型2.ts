// 1、object表示一个对象,对象赋值和函赋值都可以，一般不使用object声明
let a: object;
a = {};
a = function () { }
// (1)对象写法
// {}用来指定对象中可以包含哪些属性，结构必须一模一样
// 语法：{属性名：属性值，属性名：属性值...}
// 属性名? 表示 该属性为可选属性
let b: { name: string, age: number, sex?: string };
b = { name: '孙悟空', age: 18 };
// [propName:string]:any 表示任意类型的string属性   propName-属性名，自定义命名      
let c: { name: string, [propName: string]: any };
c = { name: '猪八戒', age: 19, sex: '男', test: '测试' };
// (2)设置函数结构的类型声明
// 语法:(形参:类型,形参:类型,...)=>返回值
let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}
// -------------------------------------------------------------------------------------------
//  2、数组的类型声明
/* 
    语法：
        类型[];
        Array<类型>
 */
// 字符串数组
let e: string[];
e = ['a', 'b', 'c'];
// 数字类型数组
let f: number[];
let g: Array<number>;
// -------------------------------------------------------------------------------------------
// 3、元组
// 元组就是固定长度的数组
// 语法:[类型,类型...]
// 指定元组的一个是string类型，另一个是number类型
let h: [string, number];
h = ['hello', 123]
// -------------------------------------------------------------------------------------------
// 4、enum枚举
enum Gender {
    Male = 1,
    Female = 2
}
let i :{name:string,gender:Gender};
i = {
    name:'孙悟空',
    gender:Gender.Male  //1
}
console.log(i);

// 类型的别名
type myType1 = string;
type myType2 = 1 | 2 | 3 | 4;
let z:myType1;
let x:myType2;


