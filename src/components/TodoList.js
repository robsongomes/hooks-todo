import React, { useContext } from 'react'
import TodosContext from '../context'
import { TOOGLE_TODO, DELETE_TODO, SELECT_TODO } from '../actions'

const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext)

  return (
    <div className="section">
      <div className="container is-fluid">
        {state.todos.map(todo => (
          <div className="panel-block" key={todo.id}>
            <div className="control">
              <label className="checkbox">
                <input
                  onChange={() =>
                    dispatch({ type: TOOGLE_TODO, payload: todo })
                  }
                  checked={todo.completed}
                  type="checkbox"
                />
                <span className={`${todo.completed ? 'has-text-danger' : ''}`}>
                  {todo.text}
                </span>
              </label>
            </div>
            <span
              onClick={() => dispatch({ type: SELECT_TODO, payload: todo })}
              style={{ paddingRight: '0.5rem', cursor: 'pointer' }}
              className="has-text-info"
            >
              <i className="fas fa-pen"></i>
            </span>
            <span
              onClick={() => dispatch({ type: DELETE_TODO, payload: todo })}
              style={{ paddingLeft: '0.5rem', cursor: 'pointer' }}
              className="has-text-danger"
            >
              <i className="fas fa-times"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
