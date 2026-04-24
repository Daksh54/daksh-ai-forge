import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import PortfolioPage from "../pages/PortfolioPage";

describe("PortfolioPage", () => {
  it("filters projects by category", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <PortfolioPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByText(/TradeGenius/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Commerce" }));
    expect(screen.getByText(/RoastFlow/i)).toBeInTheDocument();
    expect(screen.queryByText(/TradeGenius/i)).not.toBeInTheDocument();
  });
});
