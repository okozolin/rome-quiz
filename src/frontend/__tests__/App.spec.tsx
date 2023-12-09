import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../app/App.tsx"


test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})