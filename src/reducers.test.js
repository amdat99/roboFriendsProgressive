import {CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constants.js'

	import * as reducers from './reducers';

	describe('searchRobots', () => {
		const initalStateSearch = {
			searchField: ''
		}
		it('should rturn inital state', () => {
			expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
		})
		it('should rturn new state', () => {
			expect(reducers.searchRobots(initalStateSearch, {
				type: CHANGE_SEARCH_FIELD,
				payload: 'abc'
		})).toEqual({ searchField: 'abc'}) 
	})
	})


		describe('requestRobots', () => {
		const initialRobotsState = {
			robots: [],
			isPending: false,
			isFailed: ''
		}

		it('should rturn inital state', () => {
			expect(reducers.requestRobots(undefined, {})).toEqual({ robots: [],
			isPending: false, isFailed: ''})
		}) 	
		it('should rturn new pending state', () => {
			expect(reducers.requestRobots(initialRobotsState, {
				type: REQUEST_ROBOTS_PENDING,
			})).toEqual({ robots: [],isPending: true, isFailed: ''}) 
		})
			it('should rturn new success state', () => {
			expect(reducers.requestRobots(initialRobotsState, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [{
					id: '123',
					name: 'test',
					email: 'test@gmail.com'
				}]
			})).toEqual({ robots: [{
					id: '123',
					name: 'test',
					email: 'test@gmail.com'
				}],isPending: false, isFailed: ''}) 
		})

			it('should rturn new failed state', () => {
			expect(reducers.requestRobots(initialRobotsState, {
				type: REQUEST_ROBOTS_FAILED,
				payload: 'error'
				
			})).toEqual({ robots: [],isPending: false, isFailed: 'error'}) 
		})
})