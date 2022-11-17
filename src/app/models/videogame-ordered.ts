import { Rarity } from "../shared/enums/rarity";

export interface VideogameOrdered {
    id: string;
    videogameId: string;
    name: string;
    image: string;
    rarity: Rarity;
    price: number;
}
