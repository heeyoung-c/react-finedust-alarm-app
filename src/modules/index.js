import { legacy_createStore as createStore } from 'redux'
import fineDust from './fineDust'

const store = createStore(fineDust)

export default store
