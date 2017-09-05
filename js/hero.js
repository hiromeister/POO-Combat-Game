function heroCard(name, health, armor, damage){
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.damage = damage;
}

function minionsCard(name, health, damage){
    this.name = name;
    this.health = health;
    this.damage = damage;
}


// Les objets
    // Héro 
        // Gérald        
let gerald = new heroCard('Gerald', 200, 0, 15);
console.log(gerald);


// Méchants
    // Minions
        // Minion
let minion = new minionsCard('minion', 10, 10);
        // Lieutenant minion
let lieutenantMinion = new minionsCard('Minion Lieutenant', 30, 30);
        // Chef Minion
let chefMinion = new minionsCard('Chef Minion', 100, 100);



// HP Bonus
console.log("Gerald a " + gerald.health + " " + "points de vie.");
gerald.health = gerald.health+50;
console.log("Gerald a pris un bonus de vie supplémentaire et a maintenant" + " " + gerald.health + " " + "points de vie.");

// Armor Bonus
console.log(gerald.armor)
console.log("Gerald a " + gerald.armor + " " + "points d'armure.");
gerald.armor = gerald.armor+20;
console.log("Gerald obtient une armure et a maintenant" + " " + gerald.armor + " " + "points d'armure.");

//Minion attack
console.log("Un minion attaque Gérald");
