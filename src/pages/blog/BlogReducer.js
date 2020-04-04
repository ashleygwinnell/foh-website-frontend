import BlogActions from './BlogActions.js'
import { updateObject } from '../../helpers/util.js'

const initialBlogState = {
	meta: {
		loading: true,
		loaded: false,
		error: ""
		// Where should this live? 'preview' in BlogPost or higher up?
		// full: false,
	},
	posts: {
		byTitle: {

		},
		allTitles: []
	},
	pressReleases: []
}
function BlogReducer(state = initialBlogState, action) {
	//console.log(action);

	switch (action.type)
	{
		case BlogActions.FETCH_BLOG_REQUEST:
		{
			return updateObject(state, {
				...state,
				meta: {
					...state.meta,
					loading: true
				}
			});
		}
		case BlogActions.FETCH_BLOG_SUCCESS:
		{
			var allTitles = [];
			var byTitles = {};
			for(var i = 0; i < action.payload.posts.length; i++) {
				const p = action.payload.posts[i];
				allTitles.push(p.title_clean)
				p.loading = false;
				p.loaded = false;
				byTitles[p.title_clean] = p;
			}

			return {
				...state,
				meta: {
					...state.meta,
					loading: false,
					loaded: true,
					error: ""
				},
				posts: {
					...state.posts,
					byTitle: byTitles,
					allTitles: allTitles
				},
				pressReleases: action.payload.pressreleases
			};
		}
		case BlogActions.FETCH_BLOG_ERROR:
		{
			return updateObject(state, {
				...state,
				meta: {
					...state.meta,
					loading: false,
					loaded: false,
					error: action.error
				}
			});
		}
		case BlogActions.FETCH_SINGLE_BLOG_REQUEST:
		{
			const title = action.payload.title;
			return {
				...state,
				posts: {
					...state.posts,
					byTitle: {
						...state.posts.byTitle,
						[title]: {
							...state.posts.byTitle[title],
							loading:true,
						}
					}
				}
			};
		}
		case BlogActions.FETCH_SINGLE_BLOG_SUCCESS:
		{
			const title = action.payload.title_clean;
			return {
				...state,
				posts: {
					...state.posts,
					byTitle: {
						...state.posts.byTitle,
						[title]: {
							...state.posts.byTitle[title],
							...action.payload,
							loading: false,
							loaded: true
						}
					}
				}
			};
		}
		case BlogActions.FETCH_SINGLE_BLOG_ERROR:
		{
			return state;
		}

		default:
		{
			return state;
		}
	}
}

export default BlogReducer;
