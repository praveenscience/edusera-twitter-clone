import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app with Twitter UI Clone", () => {
  render(<App />);
  const linkElement = screen.getByText(/twitter ui/i);
  expect(linkElement).toBeInTheDocument();
});
