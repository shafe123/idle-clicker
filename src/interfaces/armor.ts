import { NameValuePair } from "./name-value-pair"

export interface Armor {
    id: string,
    resistances: { [damageType: string] : Number}
}
