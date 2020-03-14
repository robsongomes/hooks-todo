import React, { useContext, useState, useEffect } from 'react'
import TodosContext from '../context'
import { UPDATE_TODO, SELECT_TODO, ADD_TODO } from '../actions'

const TodoInput = () => {
  const {
    state: { selectedTodo = {} },
    dispatch
  } = useContext(TodosContext)
  const [text, setText] = useState('')

  useEffect(() => {
    if (selectedTodo.text) {
      setText(selectedTodo.text)
    }
  }, [selectedTodo, selectedTodo.text])

  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="field">
          <div className="control">
            <form
              onSubmit={e => {
                e.preventDefault()
                if (selectedTodo.id) {
                  dispatch({
                    type: UPDATE_TODO,
                    payload: { ...selectedTodo, text }
                  })
                } else {
                  dispatch({
                    type: ADD_TODO,
                    payload: { text, completed: false }
                  })
                }
                dispatch({
                  type: SELECT_TODO,
                  payload: {}
                })
                setText('')
              }}
            >
              <input
                className="input is-simple"
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="task description"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodoInput
