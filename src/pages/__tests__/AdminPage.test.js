import React from "react";
import { render, screen } from "@testing-library/react";
import AdminPage from "../AdminPage";
import { StoreContext } from "../../store/StoreProvider";

test("shows unauthorized when user is not admin", () => {
  render(
    <StoreContext.Provider value={{ user: { role: "customer" } }}>
      <AdminPage />
    </StoreContext.Provider>
  );

  expect(screen.getByText(/Unauthorized/)).toBeInTheDocument();
});

test("renders admin console when user is admin", () => {
  render(
    <StoreContext.Provider value={{ user: { role: "admin" } }}>
      <AdminPage />
    </StoreContext.Provider>
  );

  expect(screen.getByText(/Admin Console/)).toBeInTheDocument();
  expect(screen.getByText(/Catalog CRUD/)).toBeInTheDocument();
  expect(screen.getByText(/Orders dashboard/)).toBeInTheDocument();
});
