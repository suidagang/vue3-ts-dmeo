<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    mounted() {
        this.baseType();
        this.interfaceDemo();
        this.classType();
        this.genericType();
        this.interfaceOrType();
    },
    methods: {
        /**
         * 介绍接口（interface）和type的区别和使用场景
         */
        interfaceOrType(){},
        /**
         * 泛型
         * @des 泛型代表的是泛指某一类型，更像是一个类型变量。由尖括号包裹<T>
         * @des 主要作用是创建逻辑可复用的组件
         * @des 泛型可以作用在函数、类、接口上
         */
        genericType() {
            //***************定义函数*****************/
            function greet<T>(arg: T): T {
                return arg;
            }
            //***************定义类*****************/
            class GenericNumber<T> {
                zeroValue: T;
                add: (x: T, y: T) => T;
                constructor(zeroValue: T, add: (x: T, y: T) => T) {
                    this.zeroValue = zeroValue;
                    this.add = add;
                }
            }

            let myGenericNumber = new GenericNumber<number>(1, (a, b) => a + b);
            myGenericNumber.zeroValue = 0;
            const result = myGenericNumber.add(40, 2);
            //***************定义接口*****************/
            // 第一种定义方式：泛型接口
            interface ConfigFns {
                <T>(value1: T): T; // 泛型接口
            }
            var getData: ConfigFns = function <T>(value1: T): T {
                return value1;
            };
            getData<string>("OK");
            // 第二种定义方式
            interface ConfigFnplus<T> {
                (value1: T): T; // 泛型接口
            }
            function getData1<T>(value1: T): T {
                return value1;
            }
            var myGetData: ConfigFnplus<string> = getData1;
            myGetData("OK,wo");
            //***************泛型约束(泛型还可以被约束，这样就不是接受任意类型，必须要接受有length属性的对象)*****************/
            interface TIF {
                length: number;
            }
            function test<T extends TIF>(params: T) {
                console.log("=========>>>", params.length);
            }
            console.log(test("abc"));
            //***************定义泛型约束之类型参数*****************/
            function getPropoty<T, K extends keyof T>(obj: T, key: K) {
                return obj[key];
            };
            let obj = {a:1, b:"2", c:3};
            console.log(getPropoty(obj, 'c'),'---参数');
        },
        /**
         * 11种基础类型定义
         * @des number、string、boolean、Array、Tuple(元组)、enum(枚举)、object、never、void、null和undefined、any
         */
        baseType() {
            //***************①number  除了第一个都是进制*****************/
            let decLiteral: number = 6;
            let hexLiteral: number = 0xf00d;
            let binaryLiteral: number = 0b1010;
            let octalLiteral: number = 0o744;
            //***************string*****************/
            let name: string = "bob";
            // 字符串模板
            let age: number = 37;
            let name1: string = `Gene`;
            let sentence: string = `Hello, my name is ${name1}.I'll be ${
                age + 1
            } years old next month.`;
            //***************boolean*****************/
            let isDone: boolean = false;
            //***************Array*****************/
            let list: number[] = [1, 2, 3];
            let list1: Array<number> = [1, 2, 3]; //泛型
            //***************Tuple(元组)*****************/
            let x: [string, number];
            x = ["hello", 10];
            //***************enum(枚举)*****************/
            enum Color {
                Red,
                Green,
                Blue,
            } //默认为0,1,2
            let c: Color = Color.Green;
            //手动赋值
            enum Color1 {
                Red = 1,
                Green = 2,
                Blue = 4,
            }
            let c1: Color1 = Color1.Green;
            // 手动赋值 从几开始
            enum Color2 {
                Red = 1,
                Green,
                Blue,
            } //1,2,3
            // 数字枚举可以被混入到 计算过的和常量成员
            function getSomeValue() {
                return 1;
            }
            enum E {
                A = getSomeValue(),
                //B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
            }
            //字符串枚举
            enum DirectionString {
                Up = "UP",
                Down = "DOWN",
                Left = "LEFT",
                Right = "RIGHT",
            }
            //异构枚举(举可以混合字符串和数字成员，但是似乎你并不会这么做)
            enum BooleanLikeHeterogeneousEnum {
                No = 0,
                Yes = "YES",
            }
            //***************object*****************/
            let obj: Object;
            //***************never(never类型表示的是那些永不存在的值的类型)*****************/
            // 返回never的函数必须存在无法达到的终点
            function error(message: string): never {
                throw new Error(message);
            }
            //***************void(函数没有返回值时)*****************/
            function warnUser(): void {
                console.log("This is my warning message");
            }
            //***************null和undefined*****************/
            let u: undefined = undefined;
            let n: null = null;
            //***************any*****************/
            let notSure: any = 4;
            notSure = "maybe a string instead";
            notSure = false; // okay, definitely a boolean
        },
        /**
         * interface接口几种方式
         * @des 定义对象、定义数组、定义函数、定义类、接口相互继承、可选属性和额外检查
         */
        interfaceDemo() {
            // 接口 interface 相关定义 ---start====

            //***************①定义对象*****************/
            interface Cat {
                color: string;
            }
            let yellowCat: Cat = {
                color: "yellow",
            };
            //***************①定义数组*****************/
            interface List {
                [index: number]: string;
            }
            let list: List = ["one", "two"];
            //***************①定义函数*****************/
            interface Fun {
                (name: string): void;
            }
            let fun: Fun = function (a: string) {
                console.log(a);
            };
            //***************①定义类*****************/
            interface Person {
                name: string;
                age: number;
            }
            class People implements Person {
                name: string;
                age: number;
                constructor(name: string, age: number) {
                    this.name = name;
                    this.age = age;
                }
            }

            //***************①接口相互继承*****************/
            interface Shape {
                color: string;
            }
            interface Sqaure extends Shape {
                sideLength: number;
            }
            let square: Sqaure = {
                color: "red",
                sideLength: 11,
            };
            //***************①可选属性和额外检查*****************/
            interface TestConfig {
                color?: string;
                width?: number;
                [propsName: string]: any;
            }
            function createTest(config: TestConfig): any {}
            let myTest = createTest({ color: "red", width: 20 });

            // 接口 interface 相关定义 ---end====
        },
        /**
         * 类的介绍
         * @des 公有成员（public）、私有成员（private）、被保护的成员（protected）、静态属性（static）
         * @des 继承 extends
         * @des 抽象类 abstract
         */
        classType() {
            class tsClass {
                public a: string; //公有成员
                private b: number[]; //私有成员
                protected c: string[]; //被保护的成员
                static e: string = "e"; //静态属性
                constructor(astr: string, barr: number[], carr: string[]) {
                    this.a = astr;
                    this.b = barr;
                    this.c = carr;
                }
            }
            class SublevelCla extends tsClass {
                private dname: string; //私有成员
                constructor(
                    astr: string,
                    barr: number[],
                    carr: string[],
                    dname: string
                ) {
                    super(astr, barr, carr); //继承tsClass构造字段
                    this.dname = dname; //sublevelCla自身构造字段
                }
                fun(): void {
                    console.log(tsClass.e); //通过类获取静态成员
                }
            }
            let sub = new SublevelCla(
                "a",
                [1, 2, 3],
                ["a", "b", "c"],
                "sublevelName"
            );
            sub.fun();
            console.log(sub.a);
            // console.log(sub.b); //报错:私有成员不能被外部访问
            // console.log(sub.c); //报错：被保护的成员不能被外部访问
            // console.log(sub.dname); //报错：私有成员不能被外部访问

            // -----=抽象类=-----（抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。）
            abstract class Department {
                constructor(public name: string) {}

                printName(): void {
                    console.log("Department name: " + this.name);
                }

                abstract printMeeting(): void; // 必须在派生类中实现
            }

            class AccountingDepartment extends Department {
                constructor() {
                    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
                }

                printMeeting(): void {
                    console.log(
                        "The Accounting Department meets each Monday at 10am."
                    );
                }

                generateReports(): void {
                    console.log("Generating accounting reports...");
                }
            }

            let department: Department; // 允许创建一个对抽象类型的引用
            // department = new Department(); // 错误: 不能创建一个抽象类的实例
            department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
            department.printName();
            department.printMeeting();
            // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
        },
    },
});
</script>
