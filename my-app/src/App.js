import './Card';
import './App.css';
import CardList from './Cardlist';
import React from 'react';
import 'tachyons';
import SearchBox from './Searchbox';
import Scroll from './Scroll';


class App extends React.Component {

  constructor()
  {
    super()
    this.state = 
    {
      robots : [],
      searchfield:''
    }
  }

  onSearchChange = (event) =>
  {
    // 
    this.setState({searchfield : event.target.value})
    // console.log(filteredBooks);
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({robots : users}));
  }
  render()
  {
    const filteredRobots = this.state.robots.filter(
      robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )
    if(this.state.robots.length === 0 )
    {
      return <h1 className='tc'>Loading...</h1>
    }
    else
    {
      return (
        <div className='tc'>
          <h1> Robots </h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
              <CardList  robots={filteredRobots}/>
          </Scroll>
          
        </div>
      );
    }
    
    }
  
}

export default App;
