import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through',
      };
    } else {
      return {
        textDecoration: 'none',
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <ul>
          <input
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
          ></input>
          {title}
        </ul>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
