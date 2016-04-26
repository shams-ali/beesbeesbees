var Bee = function() {
  Grub.call(this);
  this.job = 'keep on growing';
  this.color = 'yellow'
  this.age = 5
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
//Bee.prototype.constructor = new Grub();
//Bee.prototype = Object.create(Grub.prototype);
