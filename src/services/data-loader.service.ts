import { Injectable } from '@angular/core';
import { Enemy } from '../interfaces/enemy';
import { Armor } from '../interfaces/armor';
import { Weapon } from '../interfaces/weapon';

import armors from '../../data/armor.json'
import enemies from '../../data/enemies.json'
import weapons from '../../data/weapons.json'

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  enemies: Enemy[];
  armors: Armor[];
  weapons: Weapon[];

  constructor() { 
    this.armors = armors;
    this.weapons = weapons;

    this.enemies = [];
    for(let i=0; i < enemies.length; i++) {
      let enemy = enemies[i];
      let newWeapon = this.weapons.find((weapon) => weapon.id == enemy.weaponId, weapons[0])!;
      let newArmor = this.armors.find((armor) => armor.id == enemy.armorId, armors[0])!;

      let newEnemy: Enemy = {
        name: enemy.name,
        currentHealth: enemy.currentHealth,
        maxHealth: enemy.maxHealth,
        weapon: newWeapon,
        armorId: newArmor
      }
      this.enemies.push(newEnemy)
    }
  }
}
