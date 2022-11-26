import { Rarity } from "../shared/enums/rarity";

export interface VideogameOrdered {
    id: number;
    videogameId: number;
    name: string;
    image: string;
    //rarity: Rarity;
    rarity: string;
    price: number;
}
