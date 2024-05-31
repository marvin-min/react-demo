import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";
describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initCounter={3} />);
    const value = Number(getByTestId("count").textContent);
    expect(value).toEqual(3)
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initCounter={3} />);
    const incBtn = getByRole('button', { name: "increment" });
    fireEvent.click(incBtn);
    fireEvent.click(incBtn);

    const value = Number(getByTestId("count").textContent);
    expect(value).toEqual(5)
  });
})