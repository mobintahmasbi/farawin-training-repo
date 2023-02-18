import Field from "./Components/Field.js";
import Team from "./Components/Team/Team.js";
import getListOfPlayers from './service/createPlayers.js';

let Teamone: Team = new Team(getListOfPlayers(0,11), "Teamone");
let Teamtwo: Team = new Team(getListOfPlayers(11,22), "Teamtwo");

let field: Field = new Field(Teamone, Teamtwo, 10);

field.startGame();



