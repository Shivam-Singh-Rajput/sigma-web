import { render, screen } from '@testing-library/react';
import App from './App.test';
import First from './component/First';

test('renders learn react link', () => {
  <First/>
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
