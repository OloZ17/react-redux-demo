import { selectUser } from '../actions';
import { SELECT_USER } from '../constants';

describe('actions', () => {
  it('should create an action to add a select_user', () => {
    const payload = { name: 'Sarah Croche', id: 1 };
    const expectedAction = {
      type: SELECT_USER,
      payload: payload,
    };
    expect(selectUser(payload)).toEqual(expectedAction);
  });
});
