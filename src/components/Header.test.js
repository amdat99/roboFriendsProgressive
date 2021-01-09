import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const wrapper = shallow(<Header />)
	it('expect to render Header component', () => {
	// Method1
	expect(toJson(wrapper)).toMatchSnapshot();
	})


	it('ecpect should component update to return false', () =>{
		expect(wrapper.instance().shouldComponentUpdate()).toEqual(false)
	})
