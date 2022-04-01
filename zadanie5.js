class Device {
    constructor(power) {
        this.power = power;

    }
    switchOn() {
        console.log(`Power is ${this.power} kW`)
    }
    switchOff() {
        console.log(`Power is 0 kW`)
    }
}

class Lamp extends Device {
    constructor(power, color) {
        super(power);
        this.color = color;
    }
    switchOn() {
        console.log(`Power of ${this.color} lamp is ${this.power} kW`)
    }

}


const lamp = new Lamp(600, "blue");
const comp = new Device(700);

lamp.switchOn()
comp.switchOn() 