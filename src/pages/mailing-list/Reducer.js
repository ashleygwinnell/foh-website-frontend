import { Actions as MailingListActions } from './Actions.js'
import { updateObject } from '../../helpers/util.js'

import FormState from '../forms/FormState.js'

const initialMailingListState = {
	modal: {
		state: FormState.INIT,
		error: "",
		lastDismissed: 1,
		lastSubmitted: 0
	},
	tooltip: {
		lastDismissed: 0
	}
}
export function Reducer(state = initialMailingListState, action) {

	switch (action.type)
	{
		case MailingListActions.SHOW:
		{
			return {
				...state,
				modal: {
					...state.modal,
					state: FormState.INIT,
					lastDismissed: 0
				}
			};
		}
		case MailingListActions.SUBMIT:
		{
			return {
				...state,
				modal: {
					...state.modal,
					state: FormState.SUBMITTING
				}
			};
		}
		case MailingListActions.DEBUG_FORCE_SUCCESS:
		{
			return {
				...state,
				modal: {
					...state.modal,
					state: FormState.SUBMITTED
				}
			};
		}
		case MailingListActions.SUBMIT_SUCCESS:
		{
			return {
				...state,
				modal: {
					...state.modal,
					state: FormState.SUBMITTED,
					lastSubmitted: Math.floor(Date.now() / 1000)
				}
			};
		}
		case MailingListActions.SUBMIT_ERROR:
		{
			return {
				...state,
				modal: {
					...state.modal,
					state: FormState.ERROR,
					error: action.error
				}
			};
		}

		case MailingListActions.DISMISS_MODAL:
		{
			return {
				...state,
				modal: {
					...state.modal,
					// state: FormState.INIT,
					lastDismissed: Math.floor(Date.now() / 1000)
				}
			};
		}
		case MailingListActions.DISMISS_TOOLTIP:
		{
			return {
				...state,
				tooltip: {
					...state.tooltip,
					lastDismissed: Math.floor(Date.now() / 1000)
				}
			};
		}
		case MailingListActions.RESET:
		{
			// How can these be immutable? how does local storage work with react...
			delete window.localStorage.lastSubmittedNewsletter;
        	delete window.localStorage.lastDismissedNewsletter;
        	delete window.localStorage.lastDismissedNewsletterTooltip;
			return {
				...state,
				modal: {
					state: FormState.INIT,
					lastDismissed: 0,
					lastSubmitted: 0,
				},
				tooltip: {
					lastDismissed: 0
				}
			}
		}
		default:
		{
			return state;
		}
	}
}

// export default Reducer;
