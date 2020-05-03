import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange}></input>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default AddTodo;
