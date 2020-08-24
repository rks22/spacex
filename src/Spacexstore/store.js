import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const epicMiddleware = createEpicMiddleware();


export default function configureStore() {

    const store = createStore(rootReducer,
      composeWithDevTools(applyMiddleware(epicMiddleware))
      );
  
    epicMiddleware.run(rootEpic);
  
    return store;
  }