import About from '@/app/about/page'

import {  render, screen} from '@testing-library/react'

describe('About', () => {
// ImageTesting
it('it renders 3 images from the array', () =>{
render(<About/>)

const images = screen.getAllByAltText(/logos/i)
expect(images).toHaveLength(3)


})

// it('it renders the list of names in the array', () => {
// render(<About/>)

// const logoNames = ['Tobi', 'Yemoooooo', 'Djokovic']
//   logoNames.forEach(name => {
//       expect(screen.getByText(name)).toBeInTheDocument()
//     })
// })



it('it renders all forms input', () => {
    render(<About/>)
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone no/i)).toBeInTheDocument();
     expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
})

})


