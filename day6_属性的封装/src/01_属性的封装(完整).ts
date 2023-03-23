(function () {
    //定义一个表示人的类
    class Person {
        /*
            TS可以在属性前添加属性的修饰符;
                public：可以在任意位置访问/修改(默认值)
                private： 私有属性，私有属性只能在类的内部进行访问修改；
                    -通过在类中添加方法使得私有属性可以被外部访问
                        -getter方法用来读取属性；
                        -setter方法用来设置属性；
                protected：受保护的属性，只能在当前类和当前类的子类中访问(修改)；
         */
        private name: string;
        private age: number;
        constructor(name: string, age: number) {
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
        setName(name: string) {
            this.name = name;
        }
        setAge(age: number) {
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
        protected num: number;
        constructor(num: number) {
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
        constructor(private name:string,private age:number){

        }
    }

    const c = new C("孙悟空",18);
    console.log(c);
    

})()