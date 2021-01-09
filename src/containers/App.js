// import React, { useState, useEffect } from 'react'; // import with hooks, usestate used to apply state, useeffect used to perform side effets on funtions
import React, { Component } from 'react'; // classes react import
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';
// import Header from '../components/Header';
import MainPage from '../components/MainPage';

import './App.css';
import {connect} from 'react-redux'; // import connect whn using  redux classes to connet to store
// import { useDispatch, useSelector } from 'react-redux' // only with redux hooks, selector used to apply state, dispatch used send state to store
import { setSearchField, requestRobots } from '../actions'



const mapStateToProps = state => { // Applying state with redux classes
  return{
    searchField: state.searchRobots.searchField,
     
      robots: state.requestRobots.robots,
       isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
    }
}



// const App = () => {
//     const dispatch = useDispatch() 
//     const { searchField } = useSelector((state) => state.searchRobots) // applying state with redux hooks
//     const {robots, isPending, isFailed}=  useSelector((state) => state.requestRobots )

    
  // class App extends Component{  // applying state with classes
  // constructor() { // class
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  // const [robots, setRobots] = useState([]) // applying states with hooks  
   //const [searchfield, setSearchfield] = useState('') 
  // const [count, setCount]= useState(0)

   // componentDidMount() { // class function runs when compenent loads
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  const mapDispatchToProps = (dispatch) =>{ // redux class function applies dispatch function to below class functions to fetch
  return {
  onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
  onRequestRobots: () =>  dispatch(requestRobots())
  } 
}

  // const onRequestRobots = () =>{ //  redux hook function fetches the  funtion with dispatch 
  //   dispatch(requestRobots())  
  // }

  // useEffect(()=>{ //  hook function loads when component loads 
  //    onRequestRobots()
  //     },[]) // empty array ensures function only runs once  when called.
  
class App extends Component{
 
  //  componentDidMount() { // redux class function runs when component loads 
  //   this.props.onRequestRobots()
  // }

   // useEffect(()=>{
   //    console.log(count)
   //     },[count]) // appying count state in array ensures funtion runs when state changes

// const onSearchChange = (event) => { // search change funtion with hooks redux
//   dispatch(setSearchField( event.target.value ))
//   }


  // const onSearchChange = (event) => { // hooks onsearhhangefunction 
  // setSearchfield( event.target.value )
  // }


  render(){
    return(
    <MainPage{...this.props}/> // renderfing components inmainpage
//  const {searchField, onSearchChange, robots, isPending} = this.props; // assigning with redux classes

// const filteredRobots = robots.filter(robot =>{
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     })
      

//    return (
//       <div className='tc'>
//         <Header />
//         <SearchBox searchChange={onSearchChange}/>
//         <Scroll>
//           { isPending ? <h1>Loading</h1> :
//             <ErrorBoundry>
            
//               <CardList robots={filteredRobots} />
//             </ErrorBoundry>
//           }
//         </Scroll>
//       </div>
//     );
 )} }


// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App); // how to export using redux classed and how to 
// connect redux funtions to app 