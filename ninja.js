class Ninja {
   constructor(name, health) {
      this._name = name;
      this._health = health;
      this._speed = 3;
      this._strength = 3;
   }

   sayName() {
      console.log(this._name)
   }

   showStats() {
      console.log(this._name + ' ' + this._speed + ' ' + this._strength + ' ' + this._health )
   }

   drinkSake() {
      this._health += 10;
   }
}

const Corbin = new Ninja('Corbin', 50);
Corbin.sayName();
Corbin.showStats();
Corbin.drinkSake();
Corbin.showStats();