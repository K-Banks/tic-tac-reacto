import boardStateReducer from './../../src/reducers/board-state-reducer';

describe('boardStateReducer', () => {

  test('Should return default state', () => {
    expect(boardStateReducer({}, {type: null})).toEqual({});
  });

});
