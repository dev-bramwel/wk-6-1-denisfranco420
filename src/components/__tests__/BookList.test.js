import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "../BookList";

const books = [
  {
    id: "1",
    title: "A",
    author: "X",
    description: "d",
    image: "a.jpg",
    price: 1,
  },
  {
    id: "2",
    title: "B",
    author: "Y",
    description: "d2",
    image: "b.jpg",
    price: 2,
  },
];

test("shows empty message when no books", () => {
  render(<BookList books={[]} onPurchase={() => {}} />);
  expect(
    screen.getByText(/No books found matching your search/)
  ).toBeInTheDocument();
});

test("renders list of BookCard items", () => {
  render(<BookList books={books} onPurchase={() => {}} />);
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("B")).toBeInTheDocument();
});
