import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    works: [],
  };

  doAdd = (e) => {
    e.preventDefault();
    const title = this.refs.title.value;
    let works = [];
    if (localStorage.getItem('works') == null) {
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    } else {
      works = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({ works: JSON.parse(localStorage.getItem('works')) });
  };

  componentDidMount() {
    this.setState({ works: JSON.parse(localStorage.getItem('works')) });
  }

  render() {
    const TodoList = this.state.works.map((work, _) => {
      return <li key={uuidv4()}>{work}</li>;
    });

    return (
      <div>
        <h1>My ToDo List</h1>
        <form onSubmit={this.doAdd}>
          <input type="text" placeholder="Title..." ref="title" />
          <input type="submit" value="Add" />
        </form>
        <br></br>
        <ul>{TodoList}</ul>
      </div>
    );
  }
}

export default App;
