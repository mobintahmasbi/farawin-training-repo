import Position from "./Position.js";
export default class Player {
    constructor(name, id, score, position) {
        this.name = name;
        this.id = id;
        this.position = position;
        this.score = score;
    }
    Goal() {
        switch (this.position) {
            case Position.DEFENDER:
                this.score += 3;
                break;
            case Position.ATTACKER:
                this.score += 1;
                break;
            case Position.GOALKEEPER:
                this.score += 10;
                break;
        }
        return {
            name: this.name,
            id: this.id
        };
    }
}
