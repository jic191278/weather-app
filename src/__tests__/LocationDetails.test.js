import React from "react";
import { render, screen } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  test("Location header displays correctly", () => {
    const locationProp = {
      city: "Derby",
      country: "UK"
    };
    render(<LocationDetails location={locationProp} />);

    const h2Element = screen.getByText("Derby, UK");
    expect(h2Element).toBeInTheDocument();
  });
});
