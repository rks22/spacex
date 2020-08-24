import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

let preloadedState = null;
if( window !== undefined ){
  preloadedState =  window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState ? initialState : preloadedState,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
