//Conel.log


// function Employee(){
//     this.name ="Mustafa"
// }

// //Const Emp1 = new

// const emp1 = new Employee();

// console.log(emp1);


//Constructors

function Employee(name,age,salary){

this.name = name
this.age = age
this.salary = salary

// console.log(this);

this.showInfos = function(){
    console.log(this.name,this.age,this.salary)
}

}

const emp1 = new Employee("Jack",25,5800)
const emp2 = new Employee("Hanry",18,7500)

emp1.showInfos();