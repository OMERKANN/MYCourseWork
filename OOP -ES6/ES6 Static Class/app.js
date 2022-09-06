

// class Mathematics {

//     cube(x){

//         console.log(x*x*x);
//     }
// }

// const math = new Mathematics ();
// math.cube(3);

// console.log(math);

//Static Methods

class Mathematics{

    sqrt(x){
        console.log(x*x)
    }

        static cube (x) {
            console.log(x*x*x);
        }

}

// Mathematics.cube(2);

// const math = new Mathematics();
// console.log(math);

console.log(Math.sqrt(4));