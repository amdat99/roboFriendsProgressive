
import React, { Component } from 'react'; // classes react import
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

import './MainPage.css';

class MainPage extends Component{
 
   componentDidMount() {

   console.log(process.env.REACT_APP_SAY_HI) // redux class function runs when component loads 
    this.props.onRequestRobots()
  }

   // useEffect(()=>{
   //    console.log(count)
   //     },[count]) // appying count state in array ensures funtion runs when state changes

// const onSearchChange = (event) => { // search change funtion with hooks redux
//   dispatch(setSearchField( event.target.value ))
//   }


  // const onSearchChange = (event) => { // hooks onsearhhangefunction 
  // setSearchfield( event.target.value )
  // }
  filteredRobots = () =>{ //filtered robots function 
  return this.props.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
 }

  render(){
 const {searchField, onSearchChange, robots, isPending} = this.props; // assigning with redux classes

// const filteredRobots = robots.filter(robot =>{
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     })
      

   return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
            
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  } }


export default MainPage;
// export default connect(mapStateToProps, mapDispatchToProps)(App); // how to export using redux classed and how to 