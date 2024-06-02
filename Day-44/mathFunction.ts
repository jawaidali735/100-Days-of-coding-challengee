
export class person {
    name: string;
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    };
    great(){
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    };
};

//this code is exporting to index2.ts file and this code is about a blueprint of a person.
//we can also call it object oriented programing system.