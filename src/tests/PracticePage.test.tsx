import { render, screen } from '@testing-library/react';
import PracticePage from '../pages/PracticePage';

test('render practice page', () => {
  render(<PracticePage />);
  expect(screen.getByText('Practice Page')).toBeInTheDocument();
})

test('render practice page and check button is disabled', () => {
  render(<PracticePage />);
  expect(screen.getByRole('button')).not.toBeDisabled();
})

test('render practicepage and click button to update state', () => {
  render(<PracticePage />);
  const button = screen.getByRole('button');
  button.click();
  expect(screen.getByText('Practice Page Updated')).toBeInTheDocument();
})