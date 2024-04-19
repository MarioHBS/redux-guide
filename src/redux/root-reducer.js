import { combineReducers } from 'redux'

import cartReducer from './cart/slice'
import userReducer from './user/reducer'

const rootReducer = combineReducers({ cartReducer, userReducer })

export default rootReducer
