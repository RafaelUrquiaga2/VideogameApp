import { Rarity } from "../shared/enums/rarity";

export interface Videogame {
    id: string;
    name: string;
    image: string;
    rarity: Rarity;
    price: number;
}
