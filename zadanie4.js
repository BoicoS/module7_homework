function Device(power){
    this.power = power,
    this.switchOn = function(){
      console.log(`Power is ${this.power} kW`)
    }

    this.switchOff = function(){
        console.log(`Power is 0 kW`)
      }
  }
  
  const lamp = new Device(600);
  const comp = new Device(700);
  
  lamp.switchOn()
  comp.switchOn()