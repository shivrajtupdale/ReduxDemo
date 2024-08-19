// const redux = require("redux")
// const createStore = redux.createStore
// const produce = require("immer").produce
// const combinedReducers = redux.combineReducers
// const bindActionCreators = redux.bindActionCreators

// const CAKE_ORDERED = "CAKE_ORDERED"
// const CAKE_RESTOCKED = "CAKE_RESTOCKED"
// const BAT_ORDERED = "BAT_ORDERED"
// const BAT_RESTOCKED = "BAT_RESTOCKED"

// function orderCake(qty){
//     return {
//         type : CAKE_ORDERED,
//         payload : qty
//     }
// }

// function restockCake(qty){
//     return {
//         type : CAKE_RESTOCKED,
//         payload : qty
//     }
// }

// function orderBat(num){
//     return {
//         type : BAT_ORDERED,
//         payload : num
//     }
// }

// function restockBat(num){
//     return {
//         type : BAT_RESTOCKED,
//         payload : num
//     }
// }

// const initialCakeState = {
//     numOfCakes : 40
// }

// const initialBatState = {
//     numOfBats : 50
// }

// const cakeReducer = (state = initialCakeState , action )=>{
//     switch (action.type){
//         case CAKE_ORDERED :
//             return {
//                 ...state,
//                 numOfCakes : state.numOfCakes - action.payload
//             }
//         case CAKE_RESTOCKED :
//             return {
//                 ...state,
//                 numOfCakes : state.numOfCakes + action.payload
//             }
//         default :
//             return state
//     }
// }
// const batReducer = (state = initialBatState , action )=>{
//     switch (action.type){
//         case BAT_ORDERED :
//             return {
//                 ...state,
//                 numOfBats : state.numOfBats - action.payload
//             }
//         case BAT_RESTOCKED :
//             return {
//                 ...state,
//                 numOfBats : state.numOfBats + action.payload
//             }
//         default :
//             return state
//     }
// }

// const rootReducer = redux.combineReducers({
//     cake : cakeReducer,
//     bat : batReducer
// })

// const store = createStore(rootReducer)
// console.log("Initial State",store.getState());

// const unsubscribe =  store.subscribe(()=>{console.log("Updated State",store.getState())})

// const actions = bindActionCreators({orderCake,restockCake,orderBat,restockBat},store.dispatch)

// actions.orderCake(5)
// actions.orderCake(5)
// actions.orderCake(5)
// actions.restockCake(5)
// actions.orderBat(5)
// actions.orderBat(5)
// actions.orderBat(5)
// actions.restockBat(5)


// unsubscribe()


//?==============================================================================

// const redux = require("redux")
// const createStore = redux.createStore

// const initialState = {
//     name: 'Vishwas',
//     address: {
//       street: '123 Main St',
//       city: 'Boston',
//       state: 'MA'
//     }
//   }

//   const STREET_UPDATE = "STREET_UPDATE"
  
//   function updateStreet(street){
//     return {
//         type : STREET_UPDATE,
//         payload : street
//     }
//   }

//   const reducer = (state = initialState,action)=>{
//     switch (action.type){
//         case STREET_UPDATE :
//             return {
//                 ...state,
//                 address : {
//                     ...state.address,
//                     street : action.payload
//                 }
//             }
//     }
//   }

//   const store = createStore(reducer)
//   console.log("Initial state",store.getState());

//   const unsubscribe = store.subscribe(()=>{
//     console.log("Updated State",store.getState());
//   })

//   store.dispatch(updateStreet("Gandhi marg"))
//   unsubscribe()

//?==============================================================================



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