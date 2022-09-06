


// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("Name: "+this.name+" Age: "+this.age + "Salary"+this.salary)
// }


// const emp = new Employee("Tomy",27,5400);
// console.log(emp);

// Syntactic Sugar

class Employee{
     
    constructor(name,age,salary){ //Constructor
        this.name = name;
        this.age = age;
        this.salary = salary
    }
    showInfos(){
        console.log("Name: "+this.name+" Age: "+this.age + " Salary: "+this.salary)
    }
     

}

const emp = new Employee ("Tomy",27,4500);

// console.log(emp);

emp.showInfos();