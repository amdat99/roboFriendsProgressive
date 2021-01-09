
import {CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constants.js'



export const setSearchField = (text)=>({
		
	 type: CHANGE_SEARCH_FIELD,
	 payload: text
})

// export const requestRobots = () => (dispatch) => {
// 	dispatch({type: REQUEST_ROBOTS_PENDING})
// 	  fetch('https://jsonplaceholder.typicode.com/users')
//        .then(response=> response.json())
//        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
//        .catch(error=> dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
// }

// export const requestRobots = (apiLink = "https://jsonplaceholder.typicode.com/users") => async (dispatch) => {
//   try {
//     dispatch({ type: REQUEST_ROBOTS_PENDING });
//     const response = await this.props.fetch(apiLink);
//      const data =  await response.json()
//     dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
// 	  } }



export const requestRobots = () => async (dispatch) => {
	try{
	dispatch({type: REQUEST_ROBOTS_PENDING})
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json()
 	 dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  	} catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
	  } }