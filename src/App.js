import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Cardlist} from './components/card-list/card-list.components';
import { Searchbox } from './components/searchbox/searchbox.componemts';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster:[],
      searchfield: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monster: users }));
  }
  

  render(){
    const { monster,searchfield} = this.state;
    const filteredmonster=monster.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
          placeholder='search monsters' 
          handlechange={e => this.setState({searchfield: e.target.value})}

        />
        <Cardlist monster={filteredmonster}/>  
    </div>
    );
  }
  
}

export default App;
