//? here we have used 

const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore


const initialState = {
  name: 'Vishwas',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

const STREET_UPDATE = "STREET_UPDATE";

function changeStreet(street){
    return {
        type : STREET_UPDATE,
        payload : street 
    }
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case STREET_UPDATE :
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street : action.payload
            //     }
            return produce(state, draft => {
                draft.address.street = action.payload
              })
            }
        }
    


const store = createStore(reducer)

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

store.dispatch(changeStreet('456 Main St'))
unsubscribe()