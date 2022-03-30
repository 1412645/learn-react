import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLever2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import PageReduxReducer from '../modules/pageRedux/reducer'
import AuthReducer from '../modules/pageRedux/auth/reducer'

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['name'],
  whitelist: ['address', 'infors'],
  stateReconciler: autoMergeLever2
}

const rootReducer = combineReducers({
  PageReduxReducer,
  auth: persistReducer(authPersistConfig, AuthReducer),
})

export default rootReducer