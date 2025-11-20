import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { StoreContext } from "../../store/StoreProvider";

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

test("shows cart count and handles search keys (Escape and Enter)", async () => {
  render(
    <StoreContext.Provider value={{ cartCount: 2 }}>
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="*" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    </StoreContext.Provider>
  );

  // Cart count present
  expect(screen.getByLabelText(/Cart with 2 items/)).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/Search books.../i);
  await userEvent.type(input, "hello");
  expect(input).toHaveValue("hello");

  // Escape clears and focuses
  await userEvent.keyboard("{Escape}");
  expect(input).toHaveValue("");
  expect(document.activeElement).toBe(input);

  // Enter navigates to /catalog
  await userEvent.keyboard("{Enter}");
  expect(screen.getByTestId("location")).toHaveTextContent("/catalog");
});
