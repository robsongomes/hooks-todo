import React from 'react'

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'Wash the car', completed: false },
    { id: 2, text: 'Buy a new mouse', completed: false },
    { id: 3, text: 'Go for a walk', completed: true }
  ],
  selectedTodo: {}
})

export default TodosContext
