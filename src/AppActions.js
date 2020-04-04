
const AppActions = {
	SET_LOADING: "SET_LOADING",
	FINISH_LOADING: "FINISH_LOADING"
};
export default AppActions;

let loadingTimeout = null;
export const setLoading = (loading = true) => {
	return (dispatch) => {
		dispatch({
			type: AppActions.SET_LOADING,
			loading: loading
		});
	}
}

export const fauxLoading = (loading = true) => {
	return (dispatch) => {
		if (loadingTimeout != null) { clearTimeout(loadingTimeout); }
		dispatch({
			type: AppActions.SET_LOADING,
			loading: loading
		});
		loadingTimeout = setTimeout(() => {
			dispatch(finishLoading());
		}, 500);
	}
}
export const finishLoading = () => {
	loadingTimeout = null;
	return {
		type: AppActions.FINISH_LOADING
	};
}
