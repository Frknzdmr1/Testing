import Counter from "./Counter"
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event"; 


test("test if the title render corectly", () => { 

  render(<Counter />)
  const h1 = screen.getByTestId("h1")
  expect(h1.textContent).toBe(' My Counter')
})

test('test if increase button exists', () => { 
  render(<Counter />)
  const incBtn = screen.getByRole('button', { name: '+' });
  const decBtn = screen.getByRole('button', { name: '-' });
  expect(incBtn).toBeInTheDocument();
  expect(decBtn).toBeInTheDocument();
})

test('Test if input text exits', () => { 
  render(<Counter />)
  const input = screen.queryByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).not.toBeNull();
  expect(input.value).toBe("")
})

test("test if input changed", () => { 
  render(<Counter />)
  const input = screen.queryByRole('textbox');
  // userEvent.type(input, "100");
  fireEvent.change(input, {
    target: {
      value: "100"
    }
  })
  expect(input.value).toBe("100");
  expect(input.value).not.toBe("101");
})

test("test if counter increments", () => { 
  render(<Counter />)
  const incBtn = screen.getByRole("button", { name: "+" })
  const counter = screen.getByTestId("counter");
  userEvent.click(incBtn);
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);
  expect(counter.textContent).toBe("3")
  expect(counter.textContent).not.toBe("0");
})