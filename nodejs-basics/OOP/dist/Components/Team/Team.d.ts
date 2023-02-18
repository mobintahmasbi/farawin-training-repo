import IPlayer from "../Players/IPlayer.js";
import ITeam from "./ITeam.js";
export default class Team implements ITeam {
    players: IPlayer[];
    name: string;
    score: number;
    GoalCount: number;
    constructor(players: IPlayer[], name: string);
    setscore(result: number): void;
    setGoalCount(): void;
    getGoalCount(): number;
}
