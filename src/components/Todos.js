import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={uuidv4()}
        todo={todo}
        markComplete={this.props.markComplete}
      ></TodoItem>
    ));
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
