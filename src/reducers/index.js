import boardStateReducer from './board-state-reducer';
import playerReducer from  './player-reducer';
import { combineReducers } from 'redux';
import c from './../constants';

const rootReducer = combineReducers({
  board: boardStateReducer,
  player: playerReducer
});

export default rootReducer;
