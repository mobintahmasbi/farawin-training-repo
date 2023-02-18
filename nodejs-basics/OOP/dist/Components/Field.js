export default class Field {
    constructor(hometeam, guestteam, time) {
        this.hometeam = hometeam;
        this.guestteam = guestteam;
        this.time = time;
    }
    startGame() {
        this.clearedinterval = setInterval(() => {
            let goal = Math.floor(Math.random() * 6);
            console.log("goal", goal);
            if (goal >= 3) {
                this.hometeam.setGoalCount();
                console.log(this.hometeam.getGoalCount());
            }
            else if (goal < 3) {
                this.guestteam.setGoalCount();
                console.log(this.guestteam.getGoalCount());
            }
            this.time--;
            this.endGame();
        }, 1000);
    }
    endGame() {
        if (this.time === 0) {
            clearInterval(this.clearedinterval);
            this.showResult();
            return true;
        }
        return false;
    }
    showResult() {
        console.log("hometeam", this.hometeam.getGoalCount());
        console.log("guestteam", this.guestteam.getGoalCount());
    }
}
