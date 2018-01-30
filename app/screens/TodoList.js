import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import List from '../components/List/index'
import Input from '../components/Input/index'
import Title from '../components/Title/index'

import { actionCreators } from '../actions/todoActions'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class TodoList extends Component {

  onAddTodo = (text) => {
    const { dispatch } = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props

    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(TodoList)
