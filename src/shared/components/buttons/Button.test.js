// Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

describe("Button component", () => {
  it("renders correctly with a label", () => {
    const { getByText } = render(
      <Button styleType="primary" size="large" label="Click Me" />
    );
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={mockOnClick} />
    );
    const buttonElement = getByText("Click Me");

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with a primary style", () => {
    const { getByText } = render(
      <Button label="Primary Button" styleType="primary" />
    );
    const buttonElement = getByText("Primary Button");
    expect(buttonElement).toHaveClass(
      "text-portage-50 bg-gradient-to-br from-portage-600 via-portage-400 to-portage-500 hover:from-portage-500 hover:via-portage-300 hover:to-portage-400 active:from-portage-700 active:via-portage-300 active:to-portage-600"
    );
  });

  it("renders with a outline style", () => {
    const { getByText } = render(
      <Button label="Secondary Button" styleType="outline" />
    );
    const buttonElement = getByText("Secondary Button");
    expect(buttonElement).toHaveClass(
      "text-portage-400 border-2 border-portage-400 bg-transparent hover:bg-portage-200 active:border-portage-500 active:text-portage-500"
    );
  });

  //   it('renders with a tertiary style', () => {
  //     const { getByText } = render(<Button label="Tertiary Button" styleType="tertiary" />);
  //     const buttonElement = getByText('Tertiary Button');
  //     expect(buttonElement).toHaveClass('bg-green-500');
  //   });

  it("renders with an icon", () => {
    const { getByText, getByTestId } = render(
      <Button
        label="Button with Icon"
        icon={
          <FontAwesomeIcon
            icon={faPlus}
            className="text-[18px] cursor-pointer hover:text-slate-400"
            data-testid="icon"
          />
        }
      />
    );
    const buttonElement = getByText("Button with Icon");
    const iconElement = getByTestId("icon");
    expect(buttonElement).toContainElement(iconElement);
  });
});
