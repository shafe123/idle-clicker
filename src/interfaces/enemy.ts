import { Weapon } from "./weapon"
import { Armor } from "./armor"

export interface Enemy {
    name: string,
    maxHealth: Number,
    currentHealth: Number,
    weapon: Weapon,
    armorId: Armor | undefined
}
