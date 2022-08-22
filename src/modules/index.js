import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import selectedValue from './selectedValue'
import fineDustData from './fineDustData'

const rootReducer = combineReducers({
  fineDustData,
  selectedValue,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, logger)),
)

export default store
