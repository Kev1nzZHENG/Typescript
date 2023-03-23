(function () {
    class Person {
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /* 
            在类的内部中，通过get 属性名，即可通过实例.属性名访问到get方法
            在类的内部中，通过set 属性名，即可通过实例.属性名访问到set方法
        */
       
        //定义获取属性方法（简化）
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        //定义设置属性方法(简化)
        set name(name: string) {
            this._name = name;
        }
        set age(age: number) {
            if (age > 0) {
                this._age = age;
            }
        }
    }

    //初始化
    const person = new Person("张三", 18);
    console.log("初始化", person.name,person.age);
    //修改
    person.name = "李四"
    person.age = -1;
    console.log("修改后", person.name,person.age);
})()