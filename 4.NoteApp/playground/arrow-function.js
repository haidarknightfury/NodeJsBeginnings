var square = (n) => n * n;
console.log(square(9));

var square2 = x => x * x;
console.log(square2(9));

var user = {
    name: 'haidar',
    sayHi: str => { // no this and arguments for arrow function
        console.log(arguments);// get the global function - not the context
        console.log(this.name); // this undefined for arrow
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(this.name); // different syntax for sayHiAlt
    } 
}



user.sayHi();
user.sayHiAlt(1,2,3);