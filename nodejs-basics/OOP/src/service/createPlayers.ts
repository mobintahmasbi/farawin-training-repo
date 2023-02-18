import Player from "../Components/Players/Player.js";
import Position from "../Components/Players/Position.js"



let numbertoEnglish: string[] = [
    "one", "two", "three", "four", "five", "six"
    ,"seven", "eight", "nine", "ten", "eleven"
    ,"twelve", "thirteen", "fourteen", "fifteen"
    ,"sixteen", "seventeen", "eighteen", "nineteen"
    ,"twenty", "twenty one", "twenty two"
];

export default function getListOfPlayers(start: number, end: number): Player[] {
    let players: Player[] = [];
    for (let i = start; i < end; i++) {
        let posibilities = Math.floor(Math.random() * 4)
        let pos = 0;
        switch (posibilities) {
            case 1:
                pos = Position.ATTACKER
                break;
            case 2:
                pos = Position.DEFENDER
                break;
            case 3:
                pos = Position.GOALKEEPER
                break;
            case 4:
                pos = Position.HAFBACK
        }
        players.push(
            new Player(numbertoEnglish[i], i + 1, Math.floor(Math.random() * 10), pos)
        )
    }
    return players;
}


