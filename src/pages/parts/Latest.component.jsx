// ./src/parts/Latest.component.jsx
import React from 'react';

import { Router, BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ReactMarkdown from 'react-markdown/with-html';

import Autolinker from 'autolinker';
import catchLinks from 'catch-links';

import APIHelper from '../../helpers/APIHelper';

class Latest extends React.Component {
	constructor(props) {
		super(props);

		const now = new Date().toUTCString();
		this.state = {
			tweets: [{
				// date: now,
				// text: "Loading..."
				date: new Date(2021, 4).toUTCString(),
				text: "Our Twitter account was compromised by a third party and then suspended by Twitter. Sorry!<br/><br/>Tweets continue over at <a href='https://twitter.com/ashleygwinnell' target='new'>@ashleygwinnell</a>." // Nothing we can do about it -- immensely sad times.
			}],
			blog: {
				date: now,
	    		url: "/blog",
	    		title: "Loading...",
	    		content: "Loading..."
	    	}
		};
	}
	componentDidMount() {

		catchLinks(window, (href) => {
            this.props.history.push(href);
        });

		// APIHelper.request('/api/tweets')
		// 		.then((response) => {
		// 			this.setState({
		// 				tweets: response.data
		// 			})
		// 		})
		// 		.catch((error) => { });

	    APIHelper.request('/api/blog/latest')
			.then((response) => {
				this.setState({
					blog: {
						date: response.data.timestamp,
						url: response.data.url,
						title: response.data.title,
						content: response.data.content_preview
					}
				})
		    })
	    	.catch((error) => { });

	}
	componentWillUnmount() {
		// APIHelper.cancel('/api/tweets')
		APIHelper.cancel('/api/blog/latest')
	}
	twitterDate(d) {
		const parts = d.split(" ");
		return parts[2] + " " + parts[1];
	}
	twitterLinks(text) {
		return {__html: Autolinker.link( text, {newWindow: true,mention:"twitter"} ) };
	}
	render() {
    	const tweets = this.state.tweets;
    	const tweetMarkup = tweets.map((t,i)=>{
    		const spacer = (i != tweets.length - 1)
    						?<div className='tweet-spacer'><img src='/_images/tweet-spacer.png'/></div>
    						:null;
    		return (<div key={t.date}>
    					<div className='tweet'>
							<h2 className='pretitle'>{this.twitterDate(t.date)}</h2>
							<p className='bigger' dangerouslySetInnerHTML={this.twitterLinks(t.text)}></p>
						</div>
						{spacer}
					</div>);
    	});

    	const latestPost = this.state.blog;

		return (<div id='latest' className={"latest"}>
					<div className='container'>
						<div className='row'>
							<div className='span6 my-container'>
								<div className='span5'>
									<div className='tweet-icon'>
										<a href='http://twitter.com/ashleygwinnell' target='new'>@ashleygwinnell</a>
									</div>

									<div id='tweet-data-container'>
										{tweetMarkup}
									</div>
								</div>
								<div className='span2'></div>
							</div>
							<div className='span6 '>
								<div className='blog-container'>
									<div className='hairline-spacer visible-phone'></div>
									<h2 className='pretitle'>Latest from the blog</h2>

									<div className='posts'>
										<div className='post'>
											<h2><Link to={latestPost.url}>{latestPost.title}</Link></h2>
											<div className='content'>
												<ReactMarkdown source={latestPost.content} escapeHtml={false} />
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				);
    }
}
export default withRouter(Latest)
