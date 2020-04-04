// ./src/Blog.component.jsx
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import Page from "../parts/Page.component.jsx";
import TitleBanner from "../parts/TitleBanner.component.jsx";
import FlexibleList from '../parts/FlexibleList.component.jsx'

import BlogPostList from "./BlogPostList.component.jsx";
import BlogPost from "./BlogPost.component.jsx";
import LoadingBar from '../parts/LoadingBar.component.jsx'
import LoadingSpinner from '../parts/LoadingSpinner.component.jsx'

import { fetchBlogPosts } from "./BlogActions.js";

class Blog extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (!this.props.loaded) {
			this.props.fetchBlogPosts();
		}
	}
	componentWillUnmount() {

	}

    render() {
    	return (<Page>
        			<TitleBanner title="Blog" />

					<div className='top-banner-spacer'></div>
					<div className='top-banner-spacer visible-phone'></div>

					<div className='blog-posts-container' >
						<div className='container '>
							<div className='row '>
								<div className='span4 my-blog-container' >
									<Route path="/blog/:post">
										<h2 className="pretitle">Navigate</h2>
										<ul>
											<li><Link to='/blog'>Back</Link></li>
										</ul>
										<br/>
									</Route>
									<BlogPostList posts={this.props.posts.byTitle} loading={this.props.loading} />

									<h2 className="pretitle">Press Releases (PDF)</h2>
									{this.props.loading && <LoadingSpinner/>}
									{!this.props.loading &&
									<ul>
										{this.props.pressReleases.map((p)=>{
								    		return <li key={p.file}><a href={p.file}>{p.title}</a></li>
								    	})}
    								</ul>}
									<br/>
								</div>
								<div className='span8'>
									<div className='blog-posts'>

											<Switch>
												<Route exact path="/blog/:post" component={(props) => {
													if (this.props.loading) return  <LoadingSpinner/>;
													if (!this.props.loading) {
														return <BlogPost preview={false} title={props.match.params.post} />
													}
												}}/>

												<Route exact path="/blog">


														<Helmet>
									                        <title>{__SITE_NAME} - Blog</title>
									                    </Helmet>

														{(this.props.loading) && <LoadingSpinner/>}

														{(this.props.loaded) &&
															<FlexibleList size={3} maxSize={this.props.posts.allTitles.length} renderChild={(index)=>{
																const title = Object.keys(this.props.posts.byTitle)[index];
																const post = this.props.posts.byTitle[title];
																return <BlogPost key={post.timestamp} preview={true} title={title} />;
															}}/>
														}

															{
																// (this.props.loaded) &&
																// 	Object.keys(this.props.posts.byTitle).map((title) => {
																// 		const post = this.props.posts.byTitle[title];
																// 		return <BlogPost key={post.timestamp} preview={true} title={title} />;
														  		//  })

													    	}

												</Route>

											</Switch>

									</div>
								</div>

							</div>
						</div>


					</div>
				</Page>
			);
    }
}

// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) =>{
	return {
		loading: state.app.meta.loading || state.blog.meta.loading,
		loaded: state.app.meta.loaded && state.blog.meta.loaded,
		posts: state.blog.posts,
		pressReleases: state.blog.pressReleases
	};
}

// ... normally is an object full of action creators
const mapDispatchToProps = {
	fetchBlogPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
