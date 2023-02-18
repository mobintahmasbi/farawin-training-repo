import GameResult from "./GameResult.js";
export default class Team {
    constructor(players, name) {
        this.GoalCount = 0;
        this.players = players;
        this.name = name;
    }
    setscore(result) {
        if (result === GameResult.WIN) {
            this.score += 3;
        }
        else if (result === GameResult.EVEN) {
            this.score++;
        }
    }
    setGoalCount() {
        this.GoalCount++;
    }
    getGoalCount() {
        return this.GoalCount;
    }
}
