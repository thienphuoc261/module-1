let Mobile = function(){
  this.battery = 100;
  this.drafts = "";
  this.inbox = [];
  this.sent = [];
  this.isOn = false;

  this.getStatus = function(){
    return this.isOn;
  };

  this.turnOn = function(){
    if (!this.isOn){
      return this.isOn = true;
      this.battery--;
    }
  };

  this.turnOff = function(){
    if (this.isOn){
      return this.isOn;
      this.battery--;
    }
  };

  this.chargeBattery = function(){
    if (this.battery < 100){
      this.battery = 100;
    }
  };

  this.composeDrafts = function(message){
    if (this.isOn){
      this.drafts = message;
      this.battery--;
    }
  };

  this.receiveMessage = function(message){
    if (this.isOn){
      this.inbox.push(message);
      this.battery--;
    }
  };

  this.sendMessage = function(mobile){
    if (this.isOn && mobile.isOn === true){
      mobile.receiveMessage(this.drafts);
      this.sent.push(this.drafts);
      this.drafts = "";
      this.battery--;
    }
  };

  this.readInbox = function(){
    if (this.isOn) {
      for (let i = 0; i < this.inbox.length; i++){
        console.log(this.inbox[i]);
      }
      this.battery--;
    }
  };

  this.readSent = function(){
    if (this.isOn) {
      for (let i = 0; i < this.sent.length; i++){
        console.log(this.sent[i]);
      }
    }
  };
}

let iphone = new Mobile();
let nokia = new Mobile();

// iphone.turnOn();
// nokia.turnOn();
// nokia.composeDrafts("Hello iphone");
// nokia.composeDrafts("Mệt mỏi thiệt");
// nokia.sendMessage(iphone);
// iphone.readInbox();