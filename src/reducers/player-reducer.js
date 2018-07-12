import c from './../constants';

export default (state = {}, action) => {
  let newState;
  let playerStatus;

  switch (action.type) {
  case c.PLAYER_TOGGLE:
    if ( state.player === true ) {
      playerStatus = false;
    } else {
      playerStatus = true;
    }
    newState = Object.assign({}, state);
    newState.player = playerStatus;
    return newState;
  default:
    return state;
  }
};
