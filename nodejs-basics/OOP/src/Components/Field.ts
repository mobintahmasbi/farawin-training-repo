import Team from "./Team/Team.js";

export default class Field{
    
    hometeam: Team;
    guestteam: Team;
    time: number;
    private clearedinterval: ReturnType<typeof setInterval> | undefined;

    constructor(hometeam: Team, guestteam: Team, time: number){

        this.hometeam = hometeam;
        this.guestteam = guestteam;
        this.time = time;

    }

    startGame() {
        this.clearedinterval = setInterval(() =>{
            
            let goal = Math.floor(Math.random() * 6);
            
            if(goal >= 3){
                this.hometeam.setGoalCount();
                
            }else if(goal < 3){
                this.guestteam.setGoalCount();
            }

            this.time--;
            
            this.endGame();


        }, 1000);
    }

    private endGame(): boolean {
        
        if(this.time === 0){
            clearInterval(this.clearedinterval)
            this.showResult()
            return true;
        }
        
        return false
    }

    private showResult(): void{
        
        console.log("hometeam", this.hometeam.getGoalCount());
        console.log("guestteam", this.guestteam.getGoalCount());    
        
    }
}