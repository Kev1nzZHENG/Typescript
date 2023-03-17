"use strict";
//立即执行函数：解决ts中命名重复问题
(function () {
    //定义一个动物类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log("动物在叫~");
        }
    }
    /*
        继承：
            概念：将多个类中共有的代码写在一个父类中，子类通过继承父类，那么子类会拥有父类所有的方法和属性
            新增属性/方法：如果希望在子类中添加一些父类没有的属性或方法直接添加即可；
            重写属性/方法：如果子类中添加了父类相同的方法，则子类方法会覆盖掉父类方法；
     */
    //定义一个狗类
    //Dog类继承Animal类
    class Dog extends Animal {
        //新增方法
        run() {
            console.log("遛狗");
        }
        //重写方法
        say() {
            console.log("汪汪汪");
        }
    }
    const dog = new Dog("旺财", 1);
    console.log(dog);
    dog.run();
    dog.say();
    //定义一个猫类
    //Cat类继承Animal类
    class Cat extends Animal {
        //新增方法
        run() {
            console.log("遛猫");
        }
        //重写方法
        say() {
            console.log("喵喵喵");
        }
    }
    const cat = new Cat("咪咪", 1);
    console.log(cat);
    cat.run();
    cat.say();
})();
