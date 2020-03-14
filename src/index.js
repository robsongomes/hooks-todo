import React, { useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import TodosContext from './context'
import reducer from './reducer'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {
  const todos = useContext(TodosContext)
  const [state, dispatch] = useReducer(reducer, todos)
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </TodosContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
