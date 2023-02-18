import Team from "./Team/Team.js";
export default class Field {
    hometeam: Team;
    guestteam: Team;
    time: number;
    private clearedinterval;
    constructor(hometeam: Team, guestteam: Team, time: number);
    startGame(): void;
    private endGame;
    private showResult;
}
