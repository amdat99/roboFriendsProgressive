import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false

	}
	wrapper = shallow(<MainPage {...mockProps}/>)
})
it('renders mainpage without crashing', () => {
		const mockColor = 'red'
	// Method1
	expect(toJson(wrapper)).toMatchSnapshot();
	})

	it('filters robots correcty', () =>{
		expect(wrapper.instance().filteredRobots()).toEqual([])
	})


let wrapper2;
beforeEach(() => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id:3,
			name: 'john',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false}
	wrapper2 = shallow(<MainPage {...mockProps2}/>)
})
it('filters robots correcty', () =>{
		expect(wrapper2.instance().filteredRobots()).toEqual([{
			id:3,
			name: 'john',
			email: 'john@gmail.com'}])
	})

let wrapper3;
beforeEach(() => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id:3,
			name: 'john',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false

	}
	wrapper3 = shallow(<MainPage {...mockProps3}/>)
	
})
		const filteredRobots = []
		it('filters robots correcty2', () =>{
		expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots)
})

let wrapper4;
beforeEach(() => {
	const mockProps4 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true

	}
	wrapper4 = shallow(<MainPage {...mockProps4}/>)
})


	it('recieves loading html if is pending true', () =>{
		expect(wrapper4).toMatchSnapshot();
   })



