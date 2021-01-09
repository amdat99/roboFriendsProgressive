import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

	it('expect to render Scroll component', () => {
	// Method1
	expect(toJson(shallow(<Scroll />))).toMatchSnapshot();
	})