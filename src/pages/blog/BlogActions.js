import APIHelper from '../../helpers/APIHelper';

const BlogActions = {
	FETCH_BLOG_REQUEST: "FETCH_BLOG_REQUEST",
	FETCH_BLOG_SUCCESS: "FETCH_BLOG_SUCCESS",
	FETCH_BLOG_ERROR: "FETCH_BLOG_ERROR",
	FETCH_SINGLE_BLOG_REQUEST: "FETCH_SINGLE_BLOG_REQUEST",
	FETCH_SINGLE_BLOG_SUCCESS: "FETCH_SINGLE_BLOG_SUCCESS",
	FETCH_SINGLE_BLOG_ERROR: "FETCH_SINGLE_BLOG_ERROR"
};
export default BlogActions;


export const fetchBlogPosts = () => {
	return (dispatch) => {
		dispatch({
			type: BlogActions.FETCH_BLOG_REQUEST
		});

		return APIHelper.request('/api/blog')
				.then((response) => { dispatch(fetchBlogPostsSuccess(response.data)); })
				.catch((error) => { console.log(error); })
				.then(()=>{});
	}
};
export const fetchBlogPostsSuccess = (data) => {
	return {
		type: BlogActions.FETCH_BLOG_SUCCESS,
		payload: {
			posts: data.blog,
			pressreleases: data.pressreleases
		}
	}
};
export const fetchBlogPostsError = (message) => {
	return {
		type: BlogActions.FETCH_BLOG_ERROR,
		error: message
	}
};

export const fetchSingleBlogPost = (title) => {
	return (dispatch) => {
		dispatch({
			type: BlogActions.FETCH_SINGLE_BLOG_REQUEST,
			payload: {
				title: title
			}
		});

		return APIHelper.request('/api/blog/' + title)
				.then((response) => {
					if (response.data.length == 1) {
						dispatch(fetchSingleBlogPostSuccess(response.data[0]));
						return;
					}
					dispatch(fetchSingleBlogPostError("dunno"));
				})
				.catch((error) => {
					dispatch(fetchSingleBlogPostError(error));
				})
				.then(()=>{});
	}
}


export const fetchSingleBlogPostSuccess = (data) => {
	return {
		type: BlogActions.FETCH_SINGLE_BLOG_SUCCESS,
		payload: data
	}
};
export const fetchSingleBlogPostError = (message) => {
	return {
		type: BlogActions.FETCH_SINGLE_BLOG_ERROR,
		error: message
	}
};
