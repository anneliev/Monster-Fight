function Weapon (type, damage) {
	this.type = type; 
	this.damage = damage;	
}

var dagger = new Weapon('Dagger', 75);
var sword = new Weapon('Sword', 100); 
var bow = new Weapon ('Bow', 140);
var battleAxe = new Weapon ('Battle Axe', 180);
var legendWeapon = new Weapon ('Legendary weapon', 200);


function Monster(name, health){
	this.name = name;
	this.health = health;
}

var sepi = new Monster ('Sephiroth', 2000);
var kefka = new Monster ('Kefka', 1500);
var zero = new Monster ('Zeromus', 1000);
var baha = new Monster('Bahamut', 1200);
var chimera = new Monster('Chimera', 500);

function slayMonster(weapon, monster){	
	var damage = weapon.damage;
	var health = monster.health;
	var type = weapon.type;
	var name = monster.name;
	alert(name + " appears! He has " + health + " HP. Lets fight!");
	while (health >= damage){
		var critHit = Math.random();
		if (critHit <= 0.2 && type === "Legendary weapon"){
		  health = health - (damage * 4);
			alert("Super Mega Hit! Wooow!");	
			  if(health === 0 || health < damage){
			  alert("You slayed him, AWSOME! (Refresh the page to play again)");
			  break;
			  }	
		}else if (type === "Legendary weapon"){
		  health = health - (damage * 2);
		  	alert('Critical hit! Whohoo!');
		  	  if(health === 0 || health < damage){
			  alert("You slayed him, AWSOME! (Refresh the page to play again)");	
			  break;
			  }
		}else if(critHit <= 0.2){
		  health = health - (damage * 2);
			alert("Random critical hit! Sweet!");
			 if(health === 0 || health < damage){
			  alert("You slayed him, AWSOME! (Refresh the page to play again)");
			  break;
			  }	
		}else{
		  health = health - damage;
			if(health === 0 || health < damage){
			  alert("You slayed him, AWSOME! (Refresh the page to play again)");
			  break;
			  }	
		}
	alert(name + "'s HP dropped to " + health + "! Strike again!");	
	}
}

var whichMonster = Math.random();
var theMonster;
if (whichMonster <= 0.2){
	theMonster = sepi;
  }else if (whichMonster <= 0.4){
	theMonster = baha;
  }else if (whichMonster <= 0.6){
	theMonster = kefka;
  }else if (whichMonster <= 0.8){
	theMonster = chimera;
  }else if (whichMonster <= 1){
	theMonster = zero;
}

var letsFight = prompt ("It's dangerous to go alone, take this! Which weapon do you want? 1. Dagger  2. Sword  3. Bow  4. Battle axe  5. Legendary weapon (Choose one by picking a number)");

if (letsFight == 1){
	 slayMonster(dagger, theMonster);
  }else if (letsFight == 2){
	slayMonster(sword, theMonster);
  }else if (letsFight == 3){
	slayMonster(bow, theMonster);
  }else if (letsFight == 4){
	slayMonster(battleAxe, theMonster);
  }else if (letsFight == 5){
	slayMonster(legendWeapon, theMonster);
}
