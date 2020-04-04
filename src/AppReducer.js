import { updateObject } from './helpers/util.js'
import AppActions from './AppActions.js'

const initialAppState = {
	meta: {
		loading: false,
		loaded: false
	}
}

function AppReducer(state = initialAppState, action) {
	switch (action.type) {
		case AppActions.SET_LOADING:
			return {
				...state,
				meta: {
					...state.meta,
					loading: action.loading
				}
			};
		case AppActions.FINISH_LOADING:
			return {
				...state,
				meta: {
					...state.meta,
					loading: false,
					loaded: true
				}
			}
		default:
			return state;
	}
}
export default AppReducer;
