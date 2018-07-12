import boardStateReducer from './../../src/reducers/board-state-reducer';
import c from './../../src/constants';

const newGameState = {
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

describe('boardStateReducer', () => {

  test('Should return default state', () => {
    expect(boardStateReducer({}, {type: null})).toEqual({});
  });

  test('Should set up initial empty board', () => {
    expect(boardStateReducer({}, {type: c.NEW_GAME})).toEqual({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    });
  });

  test('Should set the state of a selected square as an X if player state is true', () => {
    expect(boardStateReducer(newGameState, {type: c.UPDATE_SQUARE, player: true, squareId: 1})).toEqual({
      1: 'X',
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    });
  });

});
