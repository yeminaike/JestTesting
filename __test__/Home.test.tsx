import Home from '@/app/page'
import {render, screen} from '@testing-library/react'


describe('Home', () => {

it('should have Deploy now text', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText('Deploy now');
    expect(myElement).toBeInTheDocument(); //Assert
})
it('should have "learn"', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText(/learn/i);
    expect(myElement).toBeInTheDocument(); //Assert
})
it('should have "learn"', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText(/learn/i);
    expect(myElement).toBeInTheDocument(); //Assert
})
it('should have "learn"', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText(/learn/i);
    expect(myElement).toBeInTheDocument(); //Assert
})
it('should have "learn"', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText(/learn/i);
    expect(myElement).toBeInTheDocument(); //Assert
})

it('should have an image', () => {
    render(<Home/>)  //Arrange
    const image = screen.getByAltText(/Vercel logomark/i);
    expect(image).toBeInTheDocument(); //Assert
})


it('renders a button to /about', () => {
    render(<Home/>);

    const button = screen.getByRole('button', {name:/take me to the next page/i});
expect(button).toBeInTheDocument();

const link = button.closest('a');
expect(link).toHaveAttribute('href', '/about');
})




})


