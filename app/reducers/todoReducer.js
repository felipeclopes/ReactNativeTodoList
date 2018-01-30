import { types } from '../actions/todoActions'

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to \`{}\`  by default, but on the main screen it
//   will set to \`initialState\`. Redux will call reducer() with no state
//   on startup, and we are expected to return the initial state of the
//   app in this case.
export const reducer = (state, action) => {
  const {todos} = state
  const {type, payload} = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      }
    }
  }

  return state
}
