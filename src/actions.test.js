import * as actions from './actions';

import {CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
const mockStore = configureMockStore([thunkMiddleware])


   
    // const store = mockStore({})
// })
// const mockStore = configureMockStore([thunkMiddleware])

it('create an action to search robots', () => {
	const text = 'wooo'
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
	 	payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)



})

// it('handles requestrobots API',  () => {

// const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
// 	  store.dispatch(actions.requestRobots(testingAPIurl))
// 	const action = store.getActions();
// 	// const expectedAction = {
// 	// 	type: REQUEST_ROBOTS_PENDING
	 	
// 	// }
// 		expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING)
// })



// it("handles requesting robots API", async  () => {

//     const store = mockStore({});
//     const api = 'https://jsonplaceholder.typicode.com/todos/1'
//      await  store.dispatch(actions.requestRobots(api)).then(()=>{
//         const action = store.getActions();
//         const firsExpectedAction = {
//             type: REQUEST_ROBOTS_PENDING
//         };
//         const payload = {
// userId: 1,
// id: 6,
// title: "delectus aut autem",
// completed: false
// }
//         expect(action[0]).toEqual(firsExpectedAction);
//         // We don't care about what data the api is returning
//         // in this test. We only test the type of the action
//         // the action creator is returning
//         expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
//         expect(action[1].payload).toEqual(payload);
//     })
//     });

// it("handles requesting robots API",  () => {
//     expect.assertions(2)
//     const store = mockStore({});
//     const api = 'https://jsonplaceholdds'
//       store.dispatch(actions.requestRobots(api)).then(()=>{
//         const action = store.getActions();
//         const firsExpectedAction = {
//             type: REQUEST_ROBOTS_PENDING
//         };
//         expect(action[0]).toEqual(firsExpectedAction);
//         // We don't care about what data the api is returning
//         // in this test. We only test the type of the action
//         // the action creator is returning
//          expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED);
        
//     })
//     });
 



// it('handles requestrobots API2', () => {
// 	// const data = [{
// 	// 	id: '123',
// 	// 	name: 'test',
// 	// 	email: 'test@gmail.com'
// 	// }]
// 	const store = mockStore()
// 	store.dispatch(actions.requestRobots())
// 	return runAsyncOperation().then(data => {
// 	const action = store.getActions();
// 	const expectedAction = {
// 		type: REQUEST_ROBOTS_SUCCESS,
// 		payload: data
	 	
// 	}
// 	expect(action[]).toEqual(expectedAction)
// })


   it("Shuld be pending and success", async ()=>{
      
        // Testing API ↓
        const store = mockStore({});
        const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
        await store.dispatch(actions.requestRobots(testingAPIurl))
        const action = store.getActions()
 
        expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING)
        expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS)
        expect(action[1].payload).toEqual([{"address": {"city": "Gwenborough", "geo": {"lat": "-37.3159", "lng": "81.1496"}, "street": "Kulas Light", "suite": "Apt. 556", "zipcode": "92998-3874"}, "company": {"bs": "harness real-time e-markets", "catchPhrase": "Multi-layered client-server neural-net", "name": "Romaguera-Crona"}, "email": "Sincere@april.biz", "id": 1, "name": "Leanne Graham", "phone": "1-770-736-8031 x56442", "username": "Bret", "website": "hildegard.org"}, {"address": {"city": "Wisokyburgh", "geo": {"lat": "-43.9509", "lng": "-34.4618"}, "street": "Victor Plains", "suite": "Suite 879", "zipcode": "90566-7771"}, "company": {"bs": "synergize scalable supply-chains", "catchPhrase": "Proactive didactic contingency", "name": "Deckow-Crist"}, "email": "Shanna@melissa.tv", "id": 2, "name": "Ervin Howell", "phone": "010-692-6593 x09125", "username": "Antonette", "website": "anastasia.net"}, {"address": {"city": "McKenziehaven", "geo": {"lat": "-68.6102", "lng": "-47.0653"}, "street": "Douglas Extension", "suite": "Suite 847", "zipcode": "59590-4157"}, "company": {"bs": "e-enable strategic applications", "catchPhrase": "Face to face bifurcated interface", "name": "Romaguera-Jacobson"}, "email": "Nathan@yesenia.net", "id": 3, "name": "Clementine Bauch", "phone": "1-463-123-4447", "username": "Samantha", "website": "ramiro.info"}, {"address": {"city": "South Elvis", "geo": {"lat": "29.4572", "lng": "-164.2990"}, "street": "Hoeger Mall", "suite": "Apt. 692", "zipcode": "53919-4257"}, "company": {"bs": "transition cutting-edge web services", "catchPhrase": "Multi-tiered zero tolerance productivity", "name": "Robel-Corkery"}, "email": "Julianne.OConner@kory.org", "id": 4, "name": "Patricia Lebsack", "phone": "493-170-9623 x156", "username": "Karianne", "website": "kale.biz"}, {"address": {"city": "Roscoeview", "geo": {"lat": "-31.8129", "lng": "62.5342"}, "street": "Skiles Walks", "suite": "Suite 351", "zipcode": "33263"}, "company": {"bs": "revolutionize end-to-end systems", "catchPhrase": "User-centric fault-tolerant solution", "name": "Keebler LLC"}, "email": "Lucio_Hettinger@annie.ca", "id": 5, "name": "Chelsey Dietrich", "phone": "(254)954-1289", "username": "Kamren", "website": "demarco.info"}, {"address": {"city": "South Christy", "geo": {"lat": "-71.4197", "lng": "71.7478"}, "street": "Norberto Crossing", "suite": "Apt. 950", "zipcode": "23505-1337"}, "company": {"bs": "e-enable innovative applications", "catchPhrase": "Synchronised bottom-line interface", "name": "Considine-Lockman"}, "email": "Karley_Dach@jasper.info", "id": 6, "name": "Mrs. Dennis Schulist", "phone": "1-477-935-8478 x6430", "username": "Leopoldo_Corkery", "website": "ola.org"}, {"address": {"city": "Howemouth", "geo": {"lat": "24.8918", "lng": "21.8984"}, "street": "Rex Trail", "suite": "Suite 280", "zipcode": "58804-1099"}, "company": {"bs": "generate enterprise e-tailers", "catchPhrase": "Configurable multimedia task-force", "name": "Johns Group"}, "email": "Telly.Hoeger@billy.biz", "id": 7, "name": "Kurtis Weissnat", "phone": "210.067.6132", "username": "Elwyn.Skiles", "website": "elvis.io"}, {"address": {"city": "Aliyaview", "geo": {"lat": "-14.3990", "lng": "-120.7677"}, "street": "Ellsworth Summit", "suite": "Suite 729", "zipcode": "45169"}, "company": {"bs": "e-enable extensible e-tailers", "catchPhrase": "Implemented secondary concept", "name": "Abernathy Group"}, "email": "Sherwood@rosamond.me", "id": 8, "name": "Nicholas Runolfsdottir V", "phone": "586.493.6943 x140", "username": "Maxime_Nienow", "website": "jacynthe.com"}, {"address": {"city": "Bartholomebury", "geo": {"lat": "24.6463", "lng": "-168.8889"}, "street": "Dayna Park", "suite": "Suite 449", "zipcode": "76495-3109"}, "company": {"bs": "aggregate real-time technologies", "catchPhrase": "Switchable contextually-based project", "name": "Yost and Sons"}, "email": "Chaim_McDermott@dana.io", "id": 9, "name": "Glenna Reichert", "phone": "(775)976-6794 x41206", "username": "Delphine", "website": "conrad.com"}, {"address": {"city": "Lebsackbury", "geo": {"lat": "-38.2386", "lng": "57.2232"}, "street": "Kattie Turnpike", "suite": "Suite 198", "zipcode": "31428-2261"}, "company": {"bs": "target end-to-end models", "catchPhrase": "Centralized empowering task-force", "name": "Hoeger LLC"}, "email": "Rey.Padberg@karina.biz", "id": 10, "name": "Clementina DuBuque", "phone": "024-648-3804", "username": "Moriah.Stanton", "website": "ambrose.net"}])
    })

  it("Shuld be pending and success", async ()=>{
      
        // Testing API ↓
        const store = mockStore({});
        const wringlink = 'https://sadadAADA.tyAFEAFEAEpi/1'
        await store.dispatch(actions.requestRobots(wringlink))
        const action = store.getActions()
 
        expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING)
        
        expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED)
        
    })



