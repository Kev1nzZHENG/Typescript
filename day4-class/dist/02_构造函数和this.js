"use strict";
class Dog {
    //构造函数，在对象创建时调用；
    // 构造函数里的this表示当前创建的实例对象；通过this向新建的对象中添加属性
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log("汪汪汪");
    }
}
const dog1 = new Dog("小黑", 2);
const dog2 = new Dog("小白", 3);
console.log(dog1);
console.log(dog2);
