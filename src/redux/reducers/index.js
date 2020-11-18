import { combineReducers } from 'redux'
import bankList from './bankList'
import bank from './bank'

const rootReducer = combineReducers({ bankList, bank })

export default rootReducer