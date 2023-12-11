import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetails from '../path-to-your/UserDetails';

test('renders UserDetails snapshot', () => {
  const user = {
    login: 'testuser',
    name: 'Test User',
    avatar_url: 'https://example.com/avatar.jpg',
    bio: 'Test bio',
    html_url: 'https://github.com/testuser',
  };

  const { asFragment } = render(<UserDetails user={user} setUser={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
