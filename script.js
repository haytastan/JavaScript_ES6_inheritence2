class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getName() {
        return 'car name in super class =>' + this.name;
    }

    getType() {
        return 'car type in super class => ' + this.type;
    }

}

class Car extends Vehicle {
    constructor(name) {
        super(name, 'Nissan');
    }

    getName() {
        return 'car name in subclass comes from ' + super.getName();
    }

}

let new_car = new Car('Renault');
alert("Car name: " + new_car.getName() + "\n" + "Car Type: " + new_car.getType());

// mesage will be: 
// Car name: car name in subclass comes from car name in super class => Renault 
// Car Type: car type in super class => Nissan

//
// We see how easy is to implement inheritance with ES6. 
// It’s finally looking like in other OO programming languages. 
// We use extends to inherit from another class and 
// the super keyword to call the parent class (function). 
// Moreover, getName() method was overridden in subclass Car.
//
