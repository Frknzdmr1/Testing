import { render , screen} from '@testing-library/react';
import Async from './Async';


// test('render posts', async() => { 
//   render(<Async />)
//   const listItems = await screen.findAllByRole('listitem')
//   expect(listItems).not.toHaveLength(0)
// })

test('render posts with Mock data', async () => { 
  //  Arrange
  window.fetch = jest.fn()
  window.fetch.mockResolvedValueOnce({
    json: async () => [{id: 'p1', title:'First Post'}]
  })

  render(<Async />)
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems).not.toHaveLength(0);
})