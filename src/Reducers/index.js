import isSignIn from "./isSignIn"
import themes from "./themes"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    themes,
    isSignIn
})

export default allReducers