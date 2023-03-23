/* function fn(a:any):any{
    return a;
} */

/* 
    在定义函数或是类时，如果遇到类型不明确就可以使用泛型；
    泛型可以同时指定多个；

*/

// T值的是泛型（可以任意命名）
// 可以让参数与返回值都是同一类型
function fn<T>(a: T): T {
    return a;
}

//调用

//不指定泛型，TS可以自动对类型进行推断；
let result = fn(10);

//指定泛型
let result2 = fn<string>("hello");

//双泛型
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}
let result3 = fn2<number, string>(123, 'hello');

interface Inter {
    length: number;
}

//泛型T必须是Inter实现类
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

let result4 = fn3({arr:[],length:10});