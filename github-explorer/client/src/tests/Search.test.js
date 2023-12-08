import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../path-to-your/Search';

test('calls setUser and navigate on search button click', async () => {
  const setUserMock = jest.fn();
  const navigateMock = jest.fn();

  render(<Search setUser={setUserMock} navigate={navigateMock} />);

  const usernameInput = screen.getByPlaceholderText('Enter GitHub username');
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });

  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  expect(setUserMock).toHaveBeenCalledWith(expect.any(Object)); // Ensure setUser is called with user data
  expect(navigateMock).toHaveBeenCalledWith('/user/testuser'); // Ensure navigate is called with the correct path
});
