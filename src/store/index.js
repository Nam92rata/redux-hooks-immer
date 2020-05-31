import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose

const appstore = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

export default appstore