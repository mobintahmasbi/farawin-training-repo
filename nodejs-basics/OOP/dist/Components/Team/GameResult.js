var GameResult;
(function (GameResult) {
    GameResult[GameResult["WIN"] = 0] = "WIN";
    GameResult[GameResult["LOOSE"] = 1] = "LOOSE";
    GameResult[GameResult["EVEN"] = 2] = "EVEN";
})(GameResult || (GameResult = {}));
export default GameResult;
