import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'
import { test, expect, describe } from 'vitest'


describe('Simple App.tsx tests', () => {

	beforeEach(() => {
		render(<App />)
	})

	test('input', async () => {	
		// ACT
		await userEvent.type(screen.getByTestId('new-todo-input'), 'Hello world')
	
		// ASSERT
		expect(screen.getByTestId('new-todo-input')).toHaveValue('Hello world')
	})


	test('addTodo', async () => {	
		// ACT
		await userEvent.type(screen.getByTestId('new-todo-input'), 'Hello world')
		await userEvent.click(screen.getByTestId('new-todo-button'))
	
		// ASSERT
		expect(screen.getByTestId('label-todo-1')).toHaveTextContent('Hello world')
	})
	
	test('checkTodo', async () => {	
		// ACT
		await userEvent.type(screen.getByTestId('new-todo-input'), 'Hello world')
		await userEvent.click(screen.getByTestId('new-todo-button'))
		await userEvent.click(screen.getByTestId('checkbox-todo-1'))
	
		// ASSERT
		expect(screen.getByTestId('checkbox-todo-1')).toBeChecked()
	})

	test('deleteTodo', async () => {	
		// ACT
		await userEvent.type(screen.getByTestId('new-todo-input'), 'Hello world')
		await userEvent.click(screen.getByTestId('new-todo-button'))
		await userEvent.click(screen.getByTestId('delete-todo-1'))
	
		// ASSERT
		expect(screen.queryByTestId('todo-1')).not.toBeInTheDocument()
	})

})
