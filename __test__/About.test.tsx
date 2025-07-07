import About from '@/app/about/page'

import {  render, screen} from '@testing-library/react'

describe('About', () => {

// ImageTesting
it('it renders 3 images from the array', () =>{
render(<About/>)

const images = screen.getAllByAltText(/logos/i)
expect(images).toHaveLength(3)

})




})


