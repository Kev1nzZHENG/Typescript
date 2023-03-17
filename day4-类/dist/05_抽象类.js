"use strict";
//立即执行函数：解决ts中命名重复问题
/*
    抽象类：专门用来被继承的类，不能用其来创建对象;
    抽象方法：
        1、没有方法体，其只能定义在抽象类中；
        2、子类必须对抽象方法重写
 */
(function () {
    //定义一个动物抽象类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // const animal = new Animal(); //报错
    //定义一个狗类
    class Dog extends Animal {
        say() {
            console.log("汪汪汪");
        }
    }
    const dog = new Dog("旺财");
    dog.say();
})();
