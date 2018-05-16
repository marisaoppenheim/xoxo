import {Map} from 'immutable'



export default function reducer(state = {board: Map(), turn:'X'}, action) {
  // TODO
  switch(action.type){
    case 'MOVE':
      return {board : state.board.setIn(action.position, action.player), turn: if(action.player === 'X'){
        return 'O'
      }else{
        return 'X'
      } }
    default:
    return state
  }


}

  //move
  const MOVE = 'MOVE'
  const move = ( coordinate, player) => ( {
    type: MOVE,
    position: coordinate,
    player: player
  }

)
