// ./src/index.jsx
import React from 'react';
import { Helmet } from "react-helmet";
import { Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';

import DateHelper from "../../helpers/DateHelper.js";

import { connect } from 'react-redux'
import { fetchSingleBlogPost } from "./BlogActions.js";
import LoadingBar from '../parts/LoadingBar.component.jsx'
import LoadingSpinner from '../parts/LoadingSpinner.component.jsx'

class BlogPost extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		if (!this.props.preview && !this.props.loaded && !this.props.loading) {
			this.props.fetchSingleBlogPost(this.props.title);
		}
	}
	componentWillUnmount() {

	}
	isValid() {
		return true; // TODO;
	}
	formatTime(timestamp) {
		const d = new Date(timestamp*1000);
		return d.getDate() + " " + DateHelper.getMonthName(d.getMonth()) + " " + d.getFullYear();
	}
	getContent() {
		if (this.props.preview) {
			return this.props.post.content_preview;
		}
		return this.props.post.content;
	}
    render(){

    	const redirect = (!this.isValid())?<Redirect to="/blog" />:null;
		const post = this.props.post;

		return (<div key={(post != null)?post.timestamp:0} className='post blogpost'>
					{!this.props.preview && post != null &&
						<Helmet>
							<title>{__SITE_NAME} - Blog - {post.title}</title>
							<meta name="description" lang="en" content={"Force Of Habit - Blog - " + post.title} />
							<meta name='keywords' content={"Force Of Habit, Ashley Gwinnell, indie game studio, experimental game design, audio design, web services," + post.meta_keywords} />
						</Helmet>
					}
					{post != null &&
						<div>
							<h2 className="pretitle">{this.formatTime(post.timestamp)}</h2>
							<h2><Link to={post.url}>{post.title}</Link></h2>
							<div className='content'>
								<ReactMarkdown source={this.getContent()} escapeHtml={false} />
								{!this.props.preview && <Link className='download-button back' to={"/blog/"}>Back</Link>}
								{this.props.preview && <Link className='download-button' to={"/blog/" + this.props.title}>Read More</Link>}
							</div>
							{redirect}
						</div>
					}
					{this.props.loading && <LoadingSpinner/>}
				</div>);
    }
}



// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) =>{
	const p = state.blog.posts.byTitle[ownProps.title];

	const c = {
		post: p,
		loading: (!p)
			? state.app.meta.loading || state.blog.meta.loading
			: state.app.meta.loading || state.blog.meta.loading || p.loading,
		loaded: (!p)
			? state.app.meta.loaded && state.blog.meta.loaded
			: state.app.meta.loaded && state.blog.meta.loaded && p.loaded,
		title: ownProps.title
	};
	//console.log('mapStateToProps', state, ownProps);
	//console.log(state.blog.meta.loading, p);
	//console.log('result', c);
	return c;
}

// ... normally is an object full of action creators
const mapDispatchToProps = {
	fetchSingleBlogPost
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);

