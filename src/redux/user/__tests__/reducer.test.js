import { user } from '../reducer';
import { SELECT_USER } from '../constants';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual({ id: 0, name: '' });
  });

  it('should return a new state', () => {
    expect(
      user(undefined, {
        type: SELECT_USER,
        payload: { name: 'Sarah Croche', id: 1 },
      })
    ).toEqual({ name: 'Sarah Croche', id: 1 });
  });
});
