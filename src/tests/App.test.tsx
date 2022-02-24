import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders app with hello world', () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
})

test('renders practice page inside app', () => {
  render(<App />);
  expect(screen.getByText('Practice Page')).toBeInTheDocument();
})
