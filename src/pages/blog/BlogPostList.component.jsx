// ./src/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../parts/LoadingSpinner.component.jsx';

class BlogPostList extends React.Component {
	constructor(props) {
		super(props);
	}
    render(){
    	var listTitle = "All Posts";
    	var listItems = Object.keys(this.props.posts).map((key, index) => {
    		const post = this.props.posts[key];
    		return (<li key={post.url}><Link to={post.url}>{post.title}</Link></li>);
    	});
    	return (<div id=''>
					<h2 className="pretitle">{listTitle}</h2>
					{this.props.loading && <LoadingSpinner/>}
					<ul>
						{listItems}
					</ul>
					<br/>
				</div>);

    }
}
export default BlogPostList;
