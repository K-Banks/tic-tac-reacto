import boardStateReducer from './board-state-reducer';
import playerReducer from  './player-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  board: boardStateReducer,
  player: playerReducer
});

export default rootReducer;
