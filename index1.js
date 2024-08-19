//! This is example 2 where we are adding ice-creams too
//? here we are using one reducer for both cake and ice cream 

//*=======================================================================================

const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators



//? Action

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "  CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "  ICECREAM_RESTOCKED";

function orderCake(qty = 1){
    return {
        type : CAKE_ORDERED,
        payload : qty
    }
}

function restockCake(qty = 1){
    return {
        type : CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1){
    return {
        type : ICECREAM_ORDERED,
        payload : qty
    }
}

function restockIceCream(qty = 1){
    return {
        type : ICECREAM_RESTOCKED,
        payload: qty
    }
}


//? reducer  

const initialState = {
    numOfCakes : 10,
    numOfIceCreams : 20
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
                    numOfCakes : state.numOfCakes + action.payload,
                }
            case ICECREAM_ORDERED :
                return {
                    ...state,
                    numOfIceCreams : state.numOfIceCreams - 1,
                }
            case ICECREAM_RESTOCKED :
                return {
                    ...state,
                    numOfIceCreams : state.numOfIceCreams + action.payload,
                }        
        default : 
            return state
    }
}

//? Store

const store = createStore(reducer)
console.log("Initial State",store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated State",store.getState()))



//* instead of using dispatch we can bind the actions using bindActionCreator

const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream}, store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(10)
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(10)


unsubscribe()

