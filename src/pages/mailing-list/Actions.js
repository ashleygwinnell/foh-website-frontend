import APIHelper from '../../helpers/APIHelper';

export const Actions = {
	SHOW: "MAILING_LIST/SHOW",
	SUBMIT : "MAILING_LIST/SUBMIT",
	SUBMIT_SUCCESS : "MAILING_LIST/SUBMIT/SUCCESS",
	SUBMIT_ERROR : "MAILING_LIST/SUBMIT/ERROR",
	DISMISS_MODAL: "MAILING_LIST/DISMISS_MODAL",
	DISMISS_TOOLTIP: "MAILING_LIST/DISMISS_TOOLTIP",
	RESET: "MAILING_LIST/RESET",
	DEBUG_FORCE_SUCCESS: "MAILING_LIST/DEBUG_FORCE_SUCCESS"
};

export const showMailingList = () => {
	return {
		type: Actions.SHOW
	}
};

export const submitMailingList = (name, email) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SUBMIT
		});

		var url = __API_HOST + "/api/mailing-list/subscribe/?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
		return APIHelper.request(url)
				.then((response) => {
					if (response.data == true) {
						return dispatch(submitMailingListSuccess());
					}
					return dispatch(submitMailingListError("error"));
				})
				.catch((error) => {
					return dispatch(submitMailingListError(error.message));
				})
				.then(()=>{});
	}
};
export const submitMailingListSuccess = () => {
	return {
		type: Actions.SUBMIT_SUCCESS
	}
}
export const submitMailingListError = (message) => {
	return {
		type: Actions.SUBMIT_ERROR,
		error: message
	}
}

export const dismissMailingListTooltip = () => {
	return {
		type: Actions.DISMISS_TOOLTIP
	}
}
export const dismissMailingListModal = () => {
	return {
		type: Actions.DISMISS_MODAL
	}
}
export const resetMailingList = () => {
	return {
		type: Actions.RESET
	}
}
export const debugForceMailingListSuccess = () => {
	return {
		type: Actions.DEBUG_FORCE_SUCCESS
	}
}
