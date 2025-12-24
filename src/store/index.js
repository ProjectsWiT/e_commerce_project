import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import * as thunkPkg from "redux-thunk";

// Farklı export tiplerine karşı güvenli middleware seçimi
const thunk = thunkPkg.default || thunkPkg.thunk || thunkPkg;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
