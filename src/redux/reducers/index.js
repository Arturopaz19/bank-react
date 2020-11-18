import { combineReducers } from 'redux'
import bankList from './bankList'
import bank from './bank'
import branch from './branch'

const rootReducer = combineReducers({ bankList, bank, branch })

export default rootReducer