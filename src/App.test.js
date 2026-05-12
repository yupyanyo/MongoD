// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MongoDBDev title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MongoDBDev/i);
    expect(titleElement).toBeInTheDocument();
});
