


class Person{ // SuperClass , BaseClass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // showInfos(){
    //     console.log(" Name :"+ this.name + " Age :" + this.age)
    // }
}

class Employee extends Person{ // DrivedClass, SubClass, CildClass
    constructor(name,age,salary){
        
    // this.name = name;
    // this.age = age;
    super(name,age);
    this.salary = salary;

     }
     showInfos(){ //Overriding
        console.log("Name :"+ this.name + " Age :" + this.age)
     }
     toString(){ //Overriding
        console.log("Employee")
     }

     
}

const emp = new Employee("Tomy",25,4000);

// console.log(emp);
emp.showInfos();
emp.toString();