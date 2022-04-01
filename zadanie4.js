function Device(power){
    this.power = power,
    this.switchOn = function(){
      console.log(`Power is ${this.power} kW`)
    }

    this.switchOff = function(){
        console.log(`Power is 0 kW`)
      }
  }

  function Lamp (power, color){
    this.power = power;
    this.color = color;

  }
  Lamp.prototype=new Device();

  Lamp.prototype.switchOn =  function(){
    console.log(`Power of ${this.color} lamp is ${this.power} kW`)
  }
  
  const lamp = new Lamp(600, "blue");
  const comp = new Device(700);
  
  lamp.switchOn()
  comp.switchOn()