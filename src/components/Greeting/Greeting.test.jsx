import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react"

describe('h1 element tests', ()=> {
    test('render h1 title',() =>{

        // 3 A's
        // Arranging data  
      
        render(<Greeting />)
         
        //Act ... nothing
      
        //Assert
        const h1 = screen.getByText('Hello world', {exact:false});
        expect(h1).toBeInTheDocument();
    test('render h1 title',() =>{

  // 3 A's
  // Arranging data  

  render(<Greeting />)
   
  //Act ... nothing

  //Assert
  const h1 = screen.getByText('Hello world', {exact:false});
  expect(h1).toBeInTheDocument();
})

//========================================================================

test ('renders h1 element by role', () => {
    render(<Greeting />)
    const h1 = screen.getByRole('heading')
    expect(h1).toBeInTheDocument();
})

//========================================================================

test('render h1 element by test ID', () => {
    render(<Greeting />)
    const h1 = screen.getByTestId('title');
    expect(h1).toBeInTheDocument();
})  })
})



//=========================================================================

describe("Testing <Greeting /> comp functionality" , () => {
    test('render Welcome back paragraph if button not clicked', () => {
    render(<Greeting />)
    //const para = screen.getByRole('paragraph');
    const para = screen.getByText('Welcome back', {exact:false})

    expect(para).toBeInTheDocument();
})
})

