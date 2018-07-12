import playerReducer from './../../src/reducers/player-reducer';
import c from './../../src/constants';

describe('playerReducer', () => {

  test('Should return default player state', () => {
    expect(playerReducer({}, {type:null})).toEqual({});
  });

});
