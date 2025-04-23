import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListGroup from "../components/ListGroup";
import "@testing-library/jest-dom"; // Import jest-dom for matchers like toHaveClass

describe("ListGroup Component", () => {
  it("renders the heading", () => {
    render(
      <ListGroup
        items={[]}
        heading="Test Heading"
        onSelectItem={() => {}}
        onInputSubmit={() => {}}
      />
    );
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  it("renders 'No items found' when items array is empty", () => {
    render(
      <ListGroup
        items={[]}
        heading="Test Heading"
        onSelectItem={() => {}}
        onInputSubmit={() => {}}
      />
    );
    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("renders all list items", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(
      <ListGroup
        items={items}
        heading="Test Heading"
        onSelectItem={() => {}}
        onInputSubmit={() => {}}
      />
    );
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("highlights a list item when clicked", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(
      <ListGroup
        items={items}
        heading="Test Heading"
        onSelectItem={() => {}}
        onInputSubmit={() => {}}
      />
    );

    const listItem = screen.getByText("Item 2");
    fireEvent.click(listItem);

    // Check if the clicked item has the "active" class
    expect(listItem).toHaveClass("active");
  });

  it("removes highlight from previously selected item when a new item is clicked", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(
      <ListGroup
        items={items}
        heading="Test Heading"
        onSelectItem={() => {}}
        onInputSubmit={() => {}}
      />
    );

    const firstItem = screen.getByText("Item 1");
    const secondItem = screen.getByText("Item 2");

    fireEvent.click(firstItem);
    expect(firstItem).toHaveClass("active");

    fireEvent.click(secondItem);
    expect(secondItem).toHaveClass("active");
    expect(firstItem).not.toHaveClass("active");
  });
});
