import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from "../app/App.tsx"


test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})


import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // TODO: does not work well. find other alternativesgit
import QuizComponent from '../features/quiz/Quiz.component.tsx';
import { RootState } from '../app/store.ts';

// Mocking Redux store
const mockStore = configureStore([]);

describe('QuizComponent', () => {
    let store: never;

    beforeEach(() => {
        const initialState: RootState = {
            quiz: {
                questions: [
                    {
                        question_id: 1,
                        question: 'Who was the first emperor of Rome?',
                        hint: 'He was adopted by Julius Caesar.',
                        answer_index: 1,
                        choices: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
                    },
                ],
                isLoading: false,
                error: null,
            },
        };

        store = mockStore(initialState);
    });

    test('renders quiz component with first question', () => {
        const { getByText } = render(
            <Provider store={store}>
                <QuizComponent />
            </Provider>
        );

        // Ensure the first question is rendered
        expect(getByText('Who was the first emperor of Rome?')).toBeInTheDocument();
    });

    test('selects an answer and moves to the next question', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <QuizComponent />
            </Provider>
        );

        // Click on an answer choice
        fireEvent.click(getByText('Julius Caesar'));

        // Wait for the timer to reach 0 and move to the next question
        await waitFor(() => {
            expect(getByText('Who was the first emperor of Rome?')).not.toBeInTheDocument();
            expect(getByText('Time Left: 20')).toBeInTheDocument();
        });
    });
});
