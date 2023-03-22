let ElectricLamp = function(status){
    this.status = status;

    this.getStatus = function(){
        return this.status;
    };
}

let SwitchButton = function(lamp, status){
    this.lamp = lamp;
    this.status = status;

    this.getLamp = function(){
        return this.lamp;
    };

    this.setLamp = function(){
        this.lamp = lamp;
    };

    this.connecttoLamp = function(ElectricLamp){
        return this.lamp = ElectricLamp;
    };

    this.switchOn = function (){
        this.lamp.status = true;
        return this.status = true;
    };

    this.switchOff = function (){
        this.lamp.status = false;
        return this.status = false;
    }
}

let electricLamp = new ElectricLamp(false);
let switchButton = new SwitchButton(electricLamp, false);

console.log(switchButton.switchOn());
console.log(electricLamp.getStatus());
console.log(switchButton.switchOff());
console.log(electricLamp.getStatus());