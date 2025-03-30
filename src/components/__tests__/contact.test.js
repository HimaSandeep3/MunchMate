import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
describe('Contact us page', () => {
    it('Contact us page rendered or not', () => {
        render(<Contact />);
        const image=screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });
    it('About me displayed or not', () => {
        render(<Contact />);
        const text=screen.getByText("About Me");
        expect(text).toBeInTheDocument();
    });
    test('Heading displayed or not', () => {
        render(<Contact />);
        const heading=screen.getAllByRole("heading");
        // expect(heading).toHaveLength(4);
        expect(heading.length).toBe(4);
    }); 
})
