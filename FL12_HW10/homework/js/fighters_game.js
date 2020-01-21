function Fighter(initialFighterProperties) {

	const fighter = Object.assign({}, initialFighterProperties);

	let maxHP = fighter.hp;
	let wins = 0;
	let losses = 0;
	const randomRate = 101;

	const setHealth = function(hp) {
		fighter.hp = hp;
	}

	this.getName = function() {
		return fighter.name;
	}
	this.getDamage = function() {
		return fighter.damage;
	}
	this.getStrength = function() {
		return fighter.strength;
	}
	this.getAgility = function() {
		return fighter.agility;
	}
	this.getHealth = function() {
		return fighter.hp;
	}
	this.attack = function(fighter) {
		const attackChance = Math.floor(Math.random() * randomRate);
		if (attackChance > fighter.getStrength() + fighter.getAgility()) {
			fighter.dealDamage(this.getDamage());
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
	this.logCombatHistory = function() {
		console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function(hp) {
		setHealth(this.getHealth() + hp);
		if (this.getHealth() > maxHP) {
			setHealth(maxHP);
		}
	}
	this.dealDamage = function(hp) {
		setHealth(this.getHealth() - hp);
		if (this.getHealth() < 0) {
			setHealth(0);
		}
	}
	this.addWin = function() {
		wins++;
	}
	this.addLoss = function() {
		losses++;
	}
}

const myFighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});
const myFighter3 = new Fighter({name: 'Eazerus', damage: 15, strength: 30, agility: 25, hp: 95});
const myFighter4 = new Fighter({name: 'Letuvos', damage: 35, strength: 15, agility: 20, hp: 85});
const myFighter5 = new Fighter({name: 'Berikas', damage: 25, strength: 25, agility: 35, hp: 80});

function battle(fighter1, fighter2) {
	if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
		if (fighter1.getHealth() === 0) {
			console.log(`${fighter1.getName()} is dead and can't fight`);
		} else {
			console.log(`${fighter2.getName()} is dead and can't fight`);
		}
	} else {
		while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
			fighter1.attack(fighter2);
			if (fighter2.getHealth() <= 0) {
				console.log(`${fighter1.getName()} has won!`);
				fighter1.addWin();
				fighter2.addLoss();
			} else {
				fighter2.attack(fighter1);
			}
			if (fighter1.getHealth() <= 0) {
				console.log(`${fighter2.getName()} has won!`);
				fighter2.addWin();
				fighter1.addLoss();
			}
		}
	}
}
