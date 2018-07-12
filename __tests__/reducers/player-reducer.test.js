import playerReducer from './../../src/reducers/player-reducer';
import c from './../../src/constants';

const playerState = {
  player: true
};

describe('playerReducer', () => {

  test('Should return default player state', () => {
    expect(playerReducer({}, {type:null})).toEqual({});
  });

  test('Should initiate player state', () => {
    expect(playerReducer(playerState, { type: c.PLAYER_TOGGLE })).toEqual({
      player: false
    });
  });

});
