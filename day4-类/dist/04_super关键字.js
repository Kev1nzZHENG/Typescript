"use strict";
//立即执行函数：解决ts中命名重复问题
/*
    super关键字：
        1、实例方法中super指向父类的原型对象(class)；
        2、在子类的构造函数中，必须使用super()
 */
(function () {
    //定义一个动物类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("动物在叫~");
        }
    }
    //定义一个狗类
    class Dog extends Animal {
        constructor(name, age) {
            //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用super()；
            super(name); //调用父类构造函数
            this.age = age;
        }
        say() {
            //在类的方法中 super表示当前类的父亲
            // super.say();
            console.log("汪汪汪");
        }
    }
    const dog = new Dog("旺财", 1);
    dog.say();
})();
