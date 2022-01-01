import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("should render", () => {
    render(<Typography>Test checkbox</Typography>);

    const typography = screen.getByText("Test typography");

    expect(typography).toBeVisible();
  });
});
