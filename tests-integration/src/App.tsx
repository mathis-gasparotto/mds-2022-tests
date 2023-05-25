import { useState } from 'react'
import './App.css'

export function addTodo(
  e: React.FormEvent<HTMLFormElement>,
  todos: Array<{ id: number; name: string; completed: boolean }>,
  setTodos: Function,
  todoName: string,
  setTodoName: Function
) {
  e.preventDefault()
  const newTodos = [
    ...todos,
    {
      id: todos.length + 1,
      name: todoName,
      completed: false
    }
  ]
  setTodos(newTodos)
  setTodoName('')
}

export function checkTodo(
  id: number,
  todos: Array<{ id: number; name: string; completed: boolean }>,
  setTodos: Function
) {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo
  })
  setTodos(newTodos)
}

export function deleteTodo(
  id: number,
  todos: Array<{ id: number; name: string; completed: boolean }>,
  setTodos: Function
) {
  const newTodos = todos.filter((todo) => todo.id !== id)
  setTodos(newTodos)
}

function App() {
  const [todos, setTodos] = useState([])
  const [todoName, setTodoName] = useState('')

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        name: todoName,
        completed: false
      }
    ]
    setTodos(newTodos)
    setTodoName('')
  }

  const handleCheckTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          data-testid="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button
          type="submit"
          data-testid="new-todo-button"
          className="btn btn__primary btn__lg"
        >
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">{todos.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos.length > 0 && todos.map((todo: {id: number, name: string, completed: boolean}) => (
          <li className="todo stack-small" data-testid={'todo-' + todo.id}>
            <div className="c-cb">
              <input
                id={'todo-' + todo.id}
								data-testid={'checkbox-todo-' + todo.id}
                type="checkbox"
                defaultChecked={todo.completed}
                onClick={() => handleCheckTodo(todo.id)}
              />
              <label
                className="todo-label"
                htmlFor={'todo-' + todo.id}
                data-testid={'label-todo-' + todo.id}
              >
                {todo.name}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit
              </button>
              <button
                type="button"
                className="btn btn__danger"
								data-testid={'delete-todo-' + todo.id}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
