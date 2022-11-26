import { Rarity } from "../shared/enums/rarity";

export interface Videogame {
    id: number;
    name: string;
    image: string;
    //rarity: Rarity;
    rarity: string;
    price: number;
}
