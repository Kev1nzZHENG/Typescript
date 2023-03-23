"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //定义获取属性方法
        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        //定义设置属性方法
        setName(name) {
            this.name = name;
        }
        setAge(age) {
            if (age > 0) {
                this.age = age;
            }
        }
    }
    //初始化
    const person = new Person("张三", 18);
    console.log("初始化", person);
    //修改
    person.setName("李四");
    person.setAge(28);
    console.log("修改后", person);
    //protected
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(666);
    b.test();
    // b.num = 999;  //只能在当前类和当前类的子类中访问(修改)
    //类的简写，可以直接将属性定义在构造函数中（属性声明与getter setter可以省略）
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("孙悟空", 18);
    console.log(c);
})();
