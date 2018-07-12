import c from './../constants';

export default (state = {}, action) => {
  let newState;
  let newGameState;
  let playerIcon;
  const { squareId, player } = action;

  switch(action.type) {
  case c.NEW_GAME:
    newGameState = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    };
    return newGameState;
  case c.UPDATE_SQUARE:
    if ( player === true ) {
      playerIcon = 'X';
    } else {
      playerIcon = 'O';
    }
    newState = Object.assign({}, state);
    newState[squareId] = playerIcon;
    return newState;
  default:
    return state;
  }
};
