
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

//开发以来，生产时需要手动请去除
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))