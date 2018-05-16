import { Map } from "immutable";

export default function reducer(state = { board: Map(), turn: "X" }, action) {
  switch (action.type) {
    case "MOVE":
      return {
        board: state.board.setIn(action.position, action.player),
        turn: action.player === "X" ? "O" : "X"
      };
    default:
      return state;
  }
}

export const winner = board => {
  let i = 2;
  let streakWinner;
  while (i >= 0) {
    if (streak(board, [0, i], [1, i], [2, i])) {
      streakWinner = streak(board, [0, i], [1, i], [2, i]);
      return streakWinner;
    } else if (streak(board, [i, 0], [i, 1], [i, 2])) {
      streakWinner = streak(board, [i, 0], [i, 1], [i, 2]);
      return streakWinner;
    } else {
      streakWinner = streak(board, [i, i], [i, i], [i, i]);
      return streakWinner;
    }
    i--;
  }
  if (streakWinner === "X") {
    return "X has won";
  } else if (streakWinner === "O") {
    return "O has won";
  } else if (streakWinner === null) {
    return null;
  } else {
    return "draw";
  }
};

export const streak = (board, firstCoord, ...remainingCoords) => {
  const firstValue = board.getIn(firstCoord);

  const coordArr = [...remainingCoords];

  for (var i = 0; i < coordArr.length; i++) {
    let checkCoord = board.getIn(coordArr[i]);

    if (checkCoord === firstValue) {
      continue;
    } else {
      return null;
    }
    return firstValue;
  }
};

//move
const MOVE = "MOVE";
export const move = (player, coordinate) => ({
  type: MOVE,
  position: coordinate,
  player: player
});
