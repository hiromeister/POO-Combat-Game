function heroCard(name, health, armor, damage){
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.damage = damage;
}

let gerald = new heroCard('Gerald', 200, 0, 15);
console.log(gerald);
console.log(gerald.health);

// Ajout +50 pts
gerald.health = gerald.health+50;
console.log(gerald.health);