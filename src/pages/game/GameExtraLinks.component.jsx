import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class GameExtraLinks extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var links = this.props.links.map((link) => {
			var plus = (link.icon)?" " + link.icon:"";
			return (<div key={link.url} className={"link" + plus}>
						<h2 className="pretitle"><a href={link.url} target="new">{link.text}</a></h2>
					</div>);
		});
		return (<div className='extra-links'>
					{links}
					<Route exact path="/">
						<div className='link plus'>
							<h2 className='pretitle'><a href='/games/'>More Games</a></h2>
						</div>
					</Route>
				</div>);
	}
};
export default GameExtraLinks
