"use strict";
(function () {
    /*
        1、接口用来定义一个类的结构，用来定义一个类应该包含哪些属性和方法,并且所有的属性和方法都不能有实际的值；
        2、接口可以在定义类的时候去限制类的结构(类型规范)
        3、接口可以当做类型声明使用，可以多次声明同一个接口(会进行合并)
     */
    /*
        1、定义类时，可以使类去实现一个接口；
        2、实现接口就是使类满足接口的要求；
    */
    //定义一个类去实现接口
    class MyClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        say() {
            console.log('hello');
        }
        ;
    }
})();
