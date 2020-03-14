import {
  TOOGLE_TODO,
  DELETE_TODO,
  SELECT_TODO,
  UPDATE_TODO,
  ADD_TODO
} from './actions'
import uuid from 'uuid/v4'

export default function(state, action) {
  switch (action.type) {
    case TOOGLE_TODO:
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      return {
        ...state,
        todos: updatedTodos
      }
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      )
      return {
        ...state,
        todos: filteredTodos
      }
    case UPDATE_TODO:
      const filtered = state.todos.filter(todo => todo.id !== action.payload.id)
      return {
        ...state,
        selectedTodo: {},
        todos: [...filtered, action.payload]
      }
    case ADD_TODO:
      const newsTodos = state.todos.concat({ ...action.payload, id: uuid() })
      return {
        ...state,
        todos: newsTodos
      }
    case SELECT_TODO:
      return {
        ...state,
        selectedTodo: state.todos.find(todo => todo.id === action.payload.id)
      }
    default:
      return state
  }
}
