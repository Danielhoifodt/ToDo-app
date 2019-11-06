import React from 'react';


class App extends React.Component {

state = {
  works:[]
}
/*onChange=(e)=>{
  this.setState({works: e.target.value});
}*/

add = (e) => {
  e.preventDefault();
  var title = this.refs.title.value;
  if(localStorage.getItem('works') == null){
    var works = [];
    works.push(title);
    localStorage.setItem('works', JSON.stringify(works));
  }else{
     works = JSON.parse(localStorage.getItem('works'));
    works.push(title);
    localStorage.setItem('works', JSON.stringify(works));
  }
  this.setState({works: JSON.parse(localStorage.getItem('works'))})
  
}
componentDidMount(){
  this.setState({works: JSON.parse(localStorage.getItem('works'))})
}


render(){

  let li = this.state.works.map((work, index)=>{
    return <li key={index}>{work}</li>
    })
  return(
    <div>
      <h1>My ToDo List</h1>
      <form onSubmit={this.add}>
        <input type="text" placeholder="Title..." ref="title"/>
        <input type="submit" value="Add" onclick={this.add} />
      </form>
      
      <br></br>
      <ul>
        {li}
      </ul>
    </div>
  );
}










}

export default App;