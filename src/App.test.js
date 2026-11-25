import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("opens the full publication list from selected research", () => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  try {
    render(<App />);
    expect(screen.getAllByRole("article")).toHaveLength(4);
    expect(screen.getByRole("heading", { name: "GCRayDiffusion" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: "All publications" }));
    expect(screen.getByRole("heading", { name: "Publications" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "The Power of Momentum Certificate" })).toBeInTheDocument();
  } finally {
    window.scrollTo.mockRestore();
  }
});
