import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore(initialState) {
  const composeEnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhencers(applyMiddleware(reduxImmutableStateInvariant(), thunk))
  );
}

export default configureStore;
