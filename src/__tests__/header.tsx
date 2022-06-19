import { screen, render, getByTestId } from "@testing-library/react";
import { Header } from "../components/header/header";


describe('Header', () => {
    it('Header rednder', () => {
        render(<Header />)
        const img = screen.getByTestId('header-img')
        const title = screen.getByText(/to-do list/i)
        expect(img).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })
    it('Header snapshot', () => {
        const header = render(<Header />)
        expect(header).toMatchSnapshot()
    })
})