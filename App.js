import React, { Component } from 'react'

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { initialState } from './app/config/store'

// Import the reducer and create a store
import { reducer } from './app/reducers/todoReducer'

// Import the TodoList container component
import TodoList from './app/screens/TodoList'

const store = createStore(reducer, initialState)

// Pass the store into the app container
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <TodoList />
      </Provider>
    )
  }
}
