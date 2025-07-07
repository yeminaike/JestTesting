import Home from '@/app/page'
import { fireEvent, render, screen} from '@testing-library/react'
import { useRouter } from 'next/navigation'


// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn(),
// }));

// describe('Home page navigation button', () => {
//   it('calls router.push("/about") when button is clicked', () => {
//     const push = jest.fn();
//     (useRouter as jest.Mock).mockReturnValue({ push });

//     render(<Home />);
    
//     const button = screen.getByRole('button', { name: /take me to the next page/i });
//     fireEvent.click(button);

//     expect(push).toHaveBeenCalledWith('/about');
//   });
// });



// Router testing 
jest.mock('next/navigation', () => ({
useRouter: jest.fn(),
}))

describe('Home', () => {

it("it calls router.push('/about') when button is clicked", () => {
const push = jest.fn(); 
// jest.fn is a hybrid function object

(useRouter as jest.Mock).mockReturnValue({push})   //This line mocks the useRouter instance and returns the object of the mock router class

render(<Home/>)
const buttonFeature  = screen.getByRole('button', {name: /take me to the next page/i})

fireEvent.click(buttonFeature)
expect(push).toHaveBeenCalledWith('/about')

})


it('should have Deploy now text', () => {
    render(<Home/>)  //Arrange

    const myElement = screen.getByText('Deploy now');
    expect(myElement).toBeInTheDocument(); //Assert
})


// it('should have "learn"', () => {
//     render(<Home/>)  //Arrange

//     const myElement = screen.getByText(/learn/i);
//     expect(myElement).toBeInTheDocument(); //Assert
// })
// it('should have "learn"', () => {
//     render(<Home/>)  //Arrange

//     const myElement = screen.getByText(/learn/i);
//     expect(myElement).toBeInTheDocument(); //Assert
// })
// it('should have "learn"', () => {
//     render(<Home/>)  //Arrange

//     const myElement = screen.getByText(/learn/i);
//     expect(myElement).toBeInTheDocument(); //Assert
// })

// it('should have "learn"', () => {
//     render(<Home/>)  //Arrange

//     const myElement = screen.getByText(/learn/i);
//     expect(myElement).toBeInTheDocument(); //Assert
// })

// ImageTesting
it('should have an image', () => {
    render(<Home/>)  //Arrange
    const image = screen.getByAltText(/Vercel logomark/i);
    expect(image).toBeInTheDocument(); //Assert
})


// LinkTesting
// it('renders a button to /about', () => {
//     render(<Home/>);

//     const button = screen.getByRole('button', {name:/take me to the next page/i});
// expect(button).toBeInTheDocument();

// const link = button.closest('a');
// expect(link).toHaveAttribute('href', '/about');
// })


// ToggleTesting

it('toggles paragraph visibility and button label', () => {
  render(<Home />);
  const button = screen.getByRole('button', { name: /showtext|hidetext/i });

  const toggleCheck = (shouldShow: boolean) => {
    fireEvent.click(button);

    if (shouldShow) {
      expect(screen.getByText(/i don appear/i)).toBeInTheDocument();
      expect(button).toHaveTextContent(/hidetext/i);
    } else {
      expect(screen.queryByText(/i don appear/i)).not.toBeInTheDocument();
      expect(button).toHaveTextContent(/showtext/i);
    }
  };

  toggleCheck(true);
  toggleCheck(false);
});

//ArrayTesting
// This array tests if the contents are renedered in the page

it ('renders all the tennis names from the array',() => {
  render(<Home/>)

  expect(screen.getByText('Roger Federer')).toBeInTheDocument();
  expect(screen.getByText('Novak Djokovic')).toBeInTheDocument();
  expect(screen.getByText('Serena Williams')).toBeInTheDocument();
})

})


