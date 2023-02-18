import IPlayer from "../Players/IPlayer.js";
import GameResult from "./GameResult.js";
import ITeam from "./ITeam.js";

export default class Team implements ITeam {
    
    players: IPlayer[];
    name: string;
    score: number;
    GoalCount: number = 0;

    constructor(players: IPlayer[], name: string){
        this.players = players;
        this.name = name;
    }

    setscore(result: number): void {
        if(result === GameResult.WIN){
            this.score += 3;
        }else if(result === GameResult.EVEN){
            this.score++;
        }
    }

    setGoalCount(): void {
        this.GoalCount++;
    }

    getGoalCount(): number {
        return this.GoalCount
    }
    
}