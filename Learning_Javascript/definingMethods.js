const Car={
    model: "Mazda",
    start: function() {
        return "Car started....";
    },
    stop() {
        return "Car stopped....";
    }
};

console.log(Car.start());
console.log(Car.stop());

class Truck {
    model="Mercedes"
    start() {
        return "Truck started....";
    }
    stop() {
        return "Truck stopped....";
    }
}
let t1=new Truck();
console.log(t1.start());
console.log(t1.stop());
console.log(t1.model);


class Sample {
    #name="Shaam";
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name=name;
    }
}
const s1=new Sample();
s1.setName="Joey";
console.log(s1.getName);


/// Defining Constructors using factory method
// function Bike(name) {
//     this.name=name;
//     console.log(this);
// }
// Bike.prototype=new Bike("Sample1");
// console.log(Bike.prototype);

class Bike {
    name='Suzuki';
    constructor(){};
    start() {};
    stop() {};
}
let b1=new Bike("Yamaha");
console.log(b1.__proto__);
console.log(Bike.prototype);


class Animal {
    name;
    constructor(name){
        this.name=name;
        console.log(this.name);
    }
    sound(){
        return "Some sound";
    }
}
class Dog extends Animal {
    constructor(){
        super("Dog");
    }
    move() {
        return "Barks";
    }
}
let d1=new Dog();
console.log(d1.sound());
d1.bread=function() {
    return "Hybrid";
}

let o1={a:1, b:2}, o2={b:3, c:4};
console.log(Object.assign(o1, o2));

console.log(this);
