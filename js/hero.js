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
// **Héro 
// ****Gérald        
let gerald = new heroCard('Gerald', 200, 0, 15);
console.log(gerald);


// **Méchants
// ***Minions
// ****Minion
let minion = new minionsCard('minion', 10, 10);
// ****Lieutenant minion
let lieutenantMinion = new minionsCard('Minion Lieutenant', 30, 30);
// *****Chef Minion
let chefMinion = new minionsCard('Chef Minion', 100, 100);



// HP Bonus
console.log("Gerald a " + gerald.health + " " + "points de vie.");
gerald.health = gerald.health+50;
console.log("Gerald a pris un bonus de vie supplémentaire et a maintenant" + " " + gerald.health + " " + "points de vie.");
console.log("//////////////////////////////////////////////////////////////////////////////////////////");
// Armor Bonus
console.log("Gerald a " + gerald.armor + " " + "points d'armure.");
gerald.armor = gerald.armor+20;
console.log("Gerald obtient une armure et a maintenant" + " " + gerald.armor + " " + "points d'armure.");
console.log("//////////////////////////////////////////////////////////////////////////////////////////");

//Minion attack
console.log("Un minion attaque Gérald ! ");
console.log("Gérald a actuellement " + gerald.health + " " + "points de vie et " + gerald.armor + " " + "points d'armures." );
gerald.armor = gerald.armor - minion.damage;
console.log("Le minion attaque de " + minion.damage + ". " + "L'armure de Gerald descend à " + gerald.armor +".");
console.log("//////////////////////////////////////////////////////////////////////////////////////////");

// Prend armure + LieutenantMinion Attack  
gerald.armor = gerald.armor + 20;
console.log("Gerald ramasse une armure et a donc " + gerald.armor + " " + "points d'armures.");

console.log("Un Lieuntenant minion attaque Gérald !");
console.log("Gérald a actuellement " + gerald.health + " " + "points de vie et " + gerald.armor + " " + "points d'armures." );
gerald.armor = gerald.armor - lieutenantMinion.damage;
console.log("Le Lieutenant minion attaque de " + lieutenantMinion.damage + ". " + "L'armure de Gerald tombe à " + gerald.armor + " il a perdu son armure !");
console.log("//////////////////////////////////////////////////////////////////////////////////////////");

// Boss Final          

let randomArmor = [20, 0, 0] ;
let randomHealth = [0, 50, 0, 0, 0];


// while(gerald.health != 0 ){

console.log("////////////////////////////TOUR 1////////////////////////////");


let randomArmorTour1 = randomArmor[Math.floor(Math.random()*randomArmor.length)];
let randomHealthTour1 = randomHealth[Math.floor(Math.random()*randomArmor.length)];
console.log(randomArmorTour1);
console.log(randomHealthTour1);
gerald.armor = gerald.armor + randomArmorTour1;
gerald.health = gerald.health + randomHealthTour1;


// Attaque sur ChefMinion1
chefMinion.health = chefMinion.health - gerald.damage;
console.log("Gerald attaque le Chef minion ! Les points de vie du boss descendent à " + chefMinion.health ); 


//Attaque sur Gerald1
if (gerald.armor > 1 ){
    gerald.armor = gerald.armor - gerald.amor;
    gerald.health = gerald.health - ;
} else { 
    gerald.health = gerald.health - chefMinion.damage;
}




console.log("////////////////////////////TOUR 2////////////////////////////");

let randomArmorTour2 = randomArmor[Math.floor(Math.random()*randomArmor.length)];
let randomHealthTour2 = randomHealth[Math.floor(Math.random()*randomArmor.length)];

console.log(randomArmorTour2);
console.log(randomHealthTour2);
gerald.armor = gerald.armor + randomArmorTour2;
gerald.health = gerald.health + randomHealthTour2;


// Attaque sur ChefMinion1
chefMinion.health = chefMinion.health - gerald.damage;
console.log("Gerald attaque le Chef minion ! Les points de vie du boss descendent à " + chefMinion.health ); 


//Attaque sur Gerald1
let tour2 = (gerald.health + gerald.armor) - chefMinion.damage;
console.log("Le Chef minion attaque Gerald de 100. Il reste " + tour2 + "points de vie à Gerald");






console.log("////////////////////////////TOUR 3 ////////////////////////////");

let randomArmorTour3 = randomArmor[Math.floor(Math.random()*randomArmor.length)];
let randomHealthTour3 = randomHealth[Math.floor(Math.random()*randomArmor.length)];

console.log(randomArmorTour3);
console.log(randomHealthTour3);
gerald.armor = gerald.armor + randomArmorTour3;
gerald.health = gerald.health + randomHealthTour3;


// Attaque sur ChefMinion1
chefMinion.health = chefMinion.health - gerald.damage;
console.log("Gerald attaque le Chef minion ! Les points de vie du boss descendent à " + chefMinion.health ); 


//Attaque sur Gerald1
let tour3 = (gerald.health + gerald.armor) - chefMinion.damage;
console.log("Le Chef minion attaque Gerald de 100. Il reste " + tour3 + "points de vie à Gerald");



console.log("////////////////////////////TOUR 4 ////////////////////////////");

let randomArmorTour4 = randomArmor[Math.floor(Math.random()*randomArmor.length)];
let randomHealthTour4 = randomHealth[Math.floor(Math.random()*randomArmor.length)];

console.log(randomArmorTour4);
console.log(randomHealthTour4);
gerald.armor = gerald.armor + randomArmorTour4;
gerald.health = gerald.health + randomHealthTour4;


// Attaque sur ChefMinion1
chefMinion.health = chefMinion.health - gerald.damage;
console.log("Gerald attaque le Chef minion ! Les points de vie du boss descendent à " + chefMinion.health ); 


//Attaque sur Gerald1
let tour4 = (gerald.health + gerald.armor) - chefMinion.damage;
console.log("Le Chef minion attaque Gerald de 100. Il reste " + tour4 + "points de vie à Gerald");



console.log("////////////////////////////TOUR 5 ////////////////////////////");

let randomArmorTour5 = randomArmor[Math.floor(Math.random()*randomArmor.length)];
let randomHealthTour5 = randomHealth[Math.floor(Math.random()*randomArmor.length)];

console.log(randomArmorTour5);
console.log(randomHealthTour5);
gerald.armor = gerald.armor + randomArmorTour5;
gerald.health = gerald.health + randomHealthTour5;


// Attaque sur ChefMinion1
chefMinion.health = chefMinion.health - gerald.damage;
console.log("Gerald attaque le Chef minion ! Les points de vie du boss descendent à " + chefMinion.health ); 


//Attaque sur Gerald1
let tour5 = (gerald.health + gerald.armor) - chefMinion.damage;
console.log("Le Chef minion attaque Gerald de 100. Il reste " + tour5 + "points de vie à Gerald");





if (gerald.armor > 0 ){

}