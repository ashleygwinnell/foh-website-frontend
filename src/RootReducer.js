

// const RootReducer = combineReducers({
//   app: AppReducer,
//   blog: BlogReducer
// })

import AppReducer from './AppReducer.js'
import BlogReducer from './pages/blog/BlogReducer.js'
import { Reducer as MailingListReducer } from './pages/mailing-list/Reducer.js'

// This is the same as above, but more explicit. I prefer it.
function RootReducer(state = {}, action) {
	return {
		app: AppReducer(state.app, action),
		blog: BlogReducer(state.blog, action),
		mailingList: MailingListReducer(state.mailingList, action)
	}
}

export default RootReducer

