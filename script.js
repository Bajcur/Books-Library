"use strict"

/*

*/
// Initialize constructor functions
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }

  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');
  const hero3 = new Hero("Koks", 2, "chuj");


  console.log(hero1);
  console.log(hero3.greet());
  console.log(hero2.greet());
