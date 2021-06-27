import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import { user } from '../redux/user';

const renderWithRedux = (
  component,
  { initialState, store = createStore(user, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

describe('Testing App() Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRedux(<App />, {
      initialState: {
        activeUser: { id: 0, name: '' },
      },
    });

    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
