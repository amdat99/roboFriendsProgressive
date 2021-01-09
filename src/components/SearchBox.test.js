import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

	it('expect to render SearchBox component', () => {
	// Method1
	expect(toJson(shallow(<SearchBox />))).toMatchSnapshot();
	})