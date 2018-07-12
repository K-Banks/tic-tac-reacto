import rootReducer from './../../src/reducers/index';
import c from './../../src/constants';
import boardStateReducer from './../../src/reducers/board-state-reducer';
import playerReducer from  './../../src/reducers/player-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Returns state if no action is specified', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      'board': {},
      'player': {}
    });
  });

  test('Should contain boardStateReducer logic', () => {
    expect(store.getState().board).toEqual(boardStateReducer(undefined, { type: null }));
  });

  test('Should contain playerReducer logic', () => {
    expect(store.getState().player).toEqual(playerReducer(undefined, { type: null }));
  });

});
