import IPlayer from "../Players/IPlayer";
export default interface ITeam {
    players: IPlayer[];
    name: string;
    score: number;
}
