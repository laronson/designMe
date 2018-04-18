import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const mainPageReducer = handleActions({
	["INIT_STATE"] : (state, action) => (
		Object.assign({}, state, {number : 1})
	),
	["SET_NUMBER"] : (state, action) => (
		Object.assign({}, state, {number: action.payload.number})
	)
}, {
	number: 2,
	welcomeMessage: "Welcome To DesignMe!"
})

export default mainPageReducer;