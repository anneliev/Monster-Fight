var heroName = prompt("What is your name?");
var levelUp = 0;
var heroHP = 2000;
var letsFight = 0;

function Weapon (type, damage, heroHP) {
	this.type = type; 
	this.damage = damage;	
	this.heroHP = heroHP;
}
var dagger = new Weapon('Dagger', 75, 2000);
var sword = new Weapon('Sword', 100, 2000); 
var bow = new Weapon ('Bow', 130, 2000);
var battleAxe = new Weapon ('Battle Axe', 170, 2000);
var legendWeapon = new Weapon ('Legendary weapon', 200, 2000);

function Monster(name, health, monsterDamage){
	this.name = name;
	this.health = health;
	this.monsterDamage = monsterDamage;
}	
var slutboss = new Monster('Sephiroth', 3000, 350);
var judge = new Monster ('Judge Gabranth', 2000, 300);
var kefka = new Monster ('Kefka', 1500, 250);
var baha = new Monster('Bahamut', 1200, 200);
var zero = new Monster ('Zeromus', 1000, 180);
var chimera = new Monster('Chimera', 800, 160);


function whichMonster(){
	var theMonster = Math.random();
	if(levelUp === 5){
		return slutboss;
	}else if (theMonster <= 0.2){
		return judge;
  	}else if (theMonster <= 0.4){
		return kefka;
  	}else if (theMonster <= 0.6){
		return baha;
 	}else if (theMonster <= 0.8){
		return zero;
  	}else if (theMonster <= 1){
		return chimera;
  	}
}

function slayMonster(weapon, monster){	
	var type = weapon.type;
	var damage = weapon.damage;
	var heroHP = weapon.heroHP;
	var name = monster.name;
	var monsterDamage = monster.monsterDamage;
	var health = monster.health;

if(levelUp === 1){ 
	heroHP = 2200;
}else if(levelUp === 2){
	heroHP = 2400;
}else if(levelUp === 3){
	heroHP = 2600;
}else if(levelUp === 4){
	heroHP = 2800;
}else if(levelUp === 5){
	heroHP = 3000;
	alert('You leveled up to 3000 HP. Get ready for a Bossfight!!');
}
	
	alert(name + " appears! He has " + health + " HP. Lets fight!");

	while (letsFight !== 6 || letsFight === true){
		var critHit = Math.random();
		if(letsFight === 6){
			alert("You're obviously not a warrior");
			break;
		}else if(heroHP <= 0){
			alert(heroName + ", you died... :(");
			heroHP = 2000;
			levelUp = 0;
			fightsOn();
		}else if(heroHP <= 400){
			var choice = prompt("Your HP is criticly low! What will you do? 1. Strike again 2. Flee");
			if(choice == 1){
				heroHP = heroHP - monsterDamage;
				health = health - damage;
				if(health === 0 || health < damage){
					if(name === 'Sephiroth'){
					gameWon();
					
					letsFight = 6;
					}else if(name !== 'Sephiroth'){
					monsterDead(); 
					}	
				}else{
				alert(name + " attacked, your HP dropped to " + heroHP + ". Your " + type + " did " + damage + " damage and " + name + "'s HP dropped to " + health + ". Strike again!");	
				}
		}else if(choice == 2){
				alert(heroName + "! You are a coward!");
				heroHP = 2000;
				fightsOn();
			}
		}else if (critHit <= 0.2 && type === "Legendary weapon"){
			heroHP = heroHP - monsterDamage;
			damage = damage * 4;
		 	health = health - damage;
			alert("Super Mega Hit! Wooow!");	
			if(health === 0 || health < damage){
			 	if(name === 'Sephiroth'){
					gameWon();
					
					letsFight = 6;
					}else if(name !== 'Sephiroth'){
					monsterDead(); 
					}	
				}else{
				alert(name + " attacked, your HP dropped to " + heroHP + ". Your " + type + " did " + damage + " damage and " + name + "'s HP dropped to " + health + ". Strike again!");	
				}
		}else if(critHit <= 0.2){
			heroHP = heroHP - monsterDamage;
			damage = damage * 2;
		  	health = health - damage;
			alert("Random critical hit! Sweet!");
			 	if(health === 0 || health < damage){
			 		if(name === 'Sephiroth'){
					gameWon();
					
					letsFight = 6;
					}else if(name !== 'Sephiroth'){
					monsterDead(); 
					}	
				}else{
				alert(name + " attacked, your HP dropped to " + heroHP + ". Your " + type + " did " + damage + " damage and " + name + "'s HP dropped to " + health + ". Strike again!");	
				}
		}else{
			heroHP = heroHP - monsterDamage;
		    health = health - damage;	
			if(health === 0 || health < damage){
			if(name === 'Sephiroth'){
					gameWon();
					
					letsFight = 6;
					}else if(name !== 'Sephiroth'){
					monsterDead(); 
					}	
				}else{
				alert(name + " attacked, your HP dropped to " + heroHP + ". Your " + type + " did " + damage + " damage and " + name + "'s HP dropped to " + health + ". Strike again!");	
				}
		}
	}
}

function monsterDead (){
	
		alert("You slayed him " + heroName + ", AWSOME! You leveled up (+200 HP)");
		levelUp++;
		fightsOn();
	
}

function fightsOn(){
	letsFight = prompt ("Allright " + heroName + ", what weapon will you wield? 1. Dagger  2. Sword  3. Bow  4. Battle axe  5. Legendary weapon (6. Quit)");

 if(letsFight == 6){
  	return letsFight = 6;
  }else if (letsFight == 1){
	 slayMonster(dagger, whichMonster());
  }else if (letsFight == 2){
	slayMonster(sword, whichMonster());
  }else if (letsFight == 3){
	slayMonster(bow, whichMonster());
  }else if (letsFight == 4){
	slayMonster(battleAxe, whichMonster());
  }else if (letsFight == 5){
	slayMonster(legendWeapon, whichMonster());
  }else{
  	alert("Invalid input. Press 1-5 to choose a weapon, Refresh the page"); 	
  	return letsFight = false;
  }	
}

fightsOn();

function gameWon(){
	alert('CONGRATULATIONS! You are a mighty worrior and you beat the game!');	
	return letsFight = 6;
}

/*}else if (type === "Legendary weapon"){
			heroHP = heroHP - monsterDamage;
			damage = damage *2;
		  	health = health - damage ;
		  	alert('Critical hit! Whohoo!');
		  	if(health === 0 || health < damage){
			 	monsterDead();
			}else{
			alert(name + " attacked, your HP dropped to " + heroHP + ". Your " + type + " did " + damage + " damage and " + name + "'s HP dropped to " + health + ". Strike again!");	
			}
*/

