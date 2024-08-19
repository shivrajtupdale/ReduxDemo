
const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators


//? Action

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "  CAKE_RESTOCKED";

function orderCake(){
    return {
        type : CAKE_ORDERED,
        quantity : 1  //payload : 1
    }
}

function restockCake(qty = 1){
    return {
        type : CAKE_RESTOCKED,
        quantity : qty  //payload : qty
    }
}


//? reducer  
//  (previousState,action) => newState


const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case CAKE_ORDERED :
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED :
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.quantity, //action.payload
            }    
        default : 
            return state
    }
}

//? Store

const store = createStore(reducer)
console.log("Initial State",store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated State",store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(10))

//* instead of using dispatch we can bind the actions using bindActionCreator

const actions = bindActionCreators({orderCake,restockCake}, store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(10)

//but its not that useful now

unsubscribe()

//! Explanation of above code :
/*
? Subscription:

"store.subscribe" takes a function as an argument.
This function is called a listener.
In this case, the listener is:

Copy code : 
() => console.log("Updated State", store.getState())

When you call "store.subscribe", it registers this listener with the Redux store.

The listener function will be called every time an action is dispatched, and the state is updated.

The "store.subscribe" method returns an unsubscribe function, which can be called to stop the listener from being notified of further state updates.

? Dispatching Actions:

When you call store.dispatch(orderCake()), the following steps occur:

The action creator orderCake is invoked, returning an action object: { type: CAKE_ORDERED, quantity: 1 }.

This action is dispatched to the store.

The store calls the reducer with the current state and the dispatched action.

The reducer processes the action and returns the new state.

The store updates its state with the new state.

All registered listeners are then invoked. This includes the listener you registered with store.subscribe.

So, each time you dispatch orderCake, the listener logs the updated state.
Unsubscribing:

After dispatching the actions, calling unsubscribe() removes the listener from the store.
This means the listener will no longer be called when actions are dispatched and the state is updated.
*/

