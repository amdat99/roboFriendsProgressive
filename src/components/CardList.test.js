import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

	it('expect to render CardList component', () => {
		const mockRobots = [{
			id:1,
			name: 'john',
			username: 'jojo',
			email: 'john@gmail.com'
		}
		]
	// Method1
	expect(toJson(shallow(<CardList robots ={mockRobots}/>))).toMatchSnapshot();
	})