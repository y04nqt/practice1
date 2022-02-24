import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders app with hello world', () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
})

test('renders practice page inside app', () => {
  render(<App />);
  expect(screen.getByText('Practice Page')).toBeInTheDocument();
})
