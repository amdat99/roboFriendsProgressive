import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton'

import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

	it('expect to render CounterButton component', () => {
		const mockColor = 'red'
	// Method1
	expect(toJson(shallow(<CounterButton color={mockColor} />))).toMatchSnapshot();
	})

it('correnctly increments the counter', () => {
  const wrapper = shallow(<CounterButton/>)

  expect(wrapper).toMatchSnapshot();
      expect((wrapper.state())).toEqual({count: 0})
  	wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect((wrapper.state())).toEqual({count: 2})
    wrapper.find('[id="counter"]').simulate('keypress');
    expect((wrapper.state())).toEqual({count: 2})
    
 
    });

  it('shouldComponentUpdate returns false when values match', () => {
  const wrapper = shallow(<CounterButton/>)
  wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.instance().shouldComponentUpdate({count: 1},{count: 1})).toBe(false)
 })

