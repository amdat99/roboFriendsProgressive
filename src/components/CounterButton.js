import React, { Component } from 'react';

class CounterButton extends Component {
	constructor(){
		super()
		this.state= {
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state.count !== nextState.count) {
			return true
		} else {
			return false
		}
	}

		// updateCount =() => {
		// 	this.setState({
		// 		count: this.state.count + 1
		// 	})
		// }


		updateCount =() => {               // change state this way to reduce side efects
			this.setState (state => {
			return{	count: this.state.count + 1}
			})
		}

	
	render(){
		
		return(
			<div>
			<button id = 'counter'
			color = {this.props.color} onClick = {this.updateCount} >
			count: {this.state.count}
			</button>
			 </div> )
			}
			}

export default CounterButton