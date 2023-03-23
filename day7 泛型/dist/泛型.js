"use strict";
/* function fn(a:any):any{
    return a;
} */
/*
    在定义函数或是类时，如果遇到类型不明确就可以使用泛型；
    泛型可以同时指定多个；

*/
// T值的是泛型（可以任意命名）
// 可以让参数与返回值都是同一类型
function fn(a) {
    return a;
}
//调用
//不指定泛型，TS可以自动对类型进行推断；
let result = fn(10);
//指定泛型
let result2 = fn("hello");
//双泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
let result3 = fn2(123, 'hello');
//泛型T必须是Inter实现类
function fn3(a) {
    return a.length;
}
let result4 = fn3({ arr: [], length: 10 });
