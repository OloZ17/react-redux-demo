import React from 'react';
import { render } from '@testing-library/react';

import UserDetail from '../UserDetail';

describe('Testing UserDetail() Component', () => {
  it('should take a snapshot', () => {
    const activeUser = { id: 0, name: '' };
    const { asFragment } = render(<UserDetail activeUser={activeUser} />);
    expect(asFragment(<UserDetail />)).toMatchSnapshot();
  });
});
