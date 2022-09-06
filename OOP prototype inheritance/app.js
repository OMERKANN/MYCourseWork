
//Inheritance


function Person(name,age){
    this.name = name;
    this.age = age;

}

Person.prototype.showInfos = function(){
    console.log(" Name: " + this.name+" Age "+this.age);
}

// const person = new Person("Tomy",25);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;  ==> Call method 
    Person.call(this,name,age)
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee")
}

// overriding

Employee.prototype.showInfos = function(){

    console.log(" Name: " + this.name+" Age: "+this.age + " Sallary: " + this.salary); 
}
const emp = new Employee("Con",25,5000);

// console.log(emp)

// emp.showInfos();
// console.log(emp.toString()); // in [object ] if add Employee.prototype.toString 
// emp.toString(); // in employee prototype

console.log(emp);