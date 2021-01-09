import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

	it('expect to render ErrorBoundry component', () => {
	// Method1
	expect(toJson(shallow(<ErrorBoundry />))).toMatchSnapshot();
	})


 
it('expect  componentDidCatch to return true', () =>{
	const wrapper = shallow(<ErrorBoundry/>)
	 expect(wrapper).toMatchSnapshot();
	 wrapper.instance().componentDidCatch()
	    expect((wrapper.state())).toEqual({hasError: true})
	})

