import { createStore,applyMiddleware } from "redux";
import rootRducer from "./reducers"
import thunk from "redux-thunk"

// import {createStore } from "redux"
// import rootReducer from "./reducers"


// export default createStore(rootReducer)
export default createStore (
    rootRducer,
    applyMiddleware(thunk)
)
