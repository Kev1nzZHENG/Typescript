//使用class关键字来定义一个类；
class Person {
    /* 
     * 直接定义的属性是实例属性，需要通过对象的实例去访问；
     * const per = new Person();
     * per.name
     * 
     * 使用static开头的属性是静态属性（类属性），通过类去访问
     * Person.age
     * 
     * readonly开头的属性表示一个只读的属性，无法修改;
     * 当static和readonly限制词都在，static要写到最前面
    */

    // 定义属性
    // 实例属性
    name: string = '孙悟空';
    age: number = 18;
    // 静态属性
    static test: string = '静态属性';
    readonly sex: string = "男";
    // 当static和readonly限制词都在，static要写到最前面
    static readonly test2: string = '静态只读'

    // 定义方法
    sayHello() {
        console.log('Hello,大家好！');
    }
}


// 创建实例
const per = new Person();
console.log(per);
console.log('------------');
// 1、通过对象实例访问属性
console.log('name属性修改前', per.name);
// 通过对象实例访修改性
per.name = "小明";
console.log('name属性修改后', per.name);
console.log('------------');
// 2、readonly 开头属性表示一个只读属性，无法修改
// per.sex = '女';
// 使用static开头的属性是静态属性（类属性），通过类去访问
console.log('静态属性修改前', Person.test);
Person.test = '修改静态属性';
console.log('静态属性修改后', Person.test);
console.log('------------');
// 3、调用方法
per.sayHello();



