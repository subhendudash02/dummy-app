import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import NewPage from '../src/components/NewPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click Me/i);
  expect(linkElement).toBeInTheDocument();
});

test('test2', () => {
  render(<NewPage />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

