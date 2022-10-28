import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';


describe('<Greeting /> component Testing', () => { 
  describe('h1 element tests', () => {
    test('render h1 title', () => {

      // 3 A's
      // Arranging data
      render(<Greeting />)

      // Act ... nothing
      // Assert
      const h1 = screen.getByText('hello world', { exact: false });
      expect(h1).toBeInTheDocument();
    })

    test('renders h1 element by role', () => {
      render(<Greeting />)
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    })

    test('render h1 element by test Id', () => {
      render(<Greeting />)
      const h1 = screen.queryByTestId('title');
      expect(h1).not.toBeNull()
    })



  })



  describe('Testing <Greeting/> comp functionality', () => {
    test('renders Welcome back paragraph if button not clicked', () => {
      render(<Greeting />)
      // const para = screen.getByRole('paragraph');
      const para = screen.getByText('Welcome back', { exact: false })
      expect(para).toBeInTheDocument();
    })


    test('render See you soon if button clicked', () => { 
      // Arrange
      render(<Greeting />);
      const btn = screen.getByRole('button');
      // click the button --- Act 
      userEvent.click(btn);
      // Assert 
      const para = screen.getByText(/See you soon/i)
      expect(para).toBeInTheDocument();
    })

    test("doesn't render 'Welcome Back' when the button clicked", () => { 
      render(<Greeting />)
      const btn = screen.getByText('Change Text');
      userEvent.click(btn);

      const para = screen.queryByText(/Welcome Back/i);
      expect(para).toBeNull();

     
    })
  })

})