import * as Actions from '../actions';
import * as Constants from '../constants';
import * as Selectors from '../selectors';
import { user } from '../reducer';

describe('user', () => {
  describe('Actions', () => {
    it('should create an action to add a select_user', () => {
      const payload = { name: 'Sarah Croche', id: 1 };
      const expectedAction = {
        type: Constants.SELECT_USER,
        payload: payload,
      };
      expect(Actions.selectUser(payload)).toEqual(expectedAction);
    });
  });

  describe('Reducer', () => {
    const initialState = {
      id: 0,
      name: '',
    };
    it('should return the initial state', () => {
      expect(user(undefined, {})).toEqual(initialState);
    });

    it('should SELECT_USER return the right state', () => {
      expect(
        user(undefined, {
          type: Constants.SELECT_USER,
          payload: { name: 'Sarah Croche', id: 1 },
        })
      ).toEqual({
        name: 'Sarah Croche',
        id: 1,
      });
    });

    it('should RESET_USER return the right state', () => {
      const state = {
        id: 1,
        name: 'Sarah Croche',
      };
      expect(
        user(state, {
          type: Constants.RESET_USER,
        })
      ).toEqual(initialState);
    });
  });

  describe('Selectors', () => {
    const state = {
      activeUser: {
        id: 1,
        name: 'Sarah Croche',
      },
    };

    it('getActiveUser', () => {
      expect(Selectors.getActiveUser({})).toEqual(null);
      expect(Selectors.getActiveUser(state)).toEqual({
        id: 1,
        name: 'Sarah Croche',
      });
    });
  });
});
