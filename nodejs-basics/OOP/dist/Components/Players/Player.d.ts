import IPlayer from "./IPlayer.js";
export default class Player implements IPlayer {
    name: string;
    id: number;
    position: number;
    score: number;
    constructor(name: string, id: number, score: number, position: number);
    Goal(): object;
}
