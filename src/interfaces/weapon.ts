import { NameValuePair } from "./name-value-pair";

export interface Weapon {
    id: string,
    imageUrl: string,
    damages: { [damageType: string] : Number; },
    chanceToHit: Number,
    attacksPerSecond: Number
}
