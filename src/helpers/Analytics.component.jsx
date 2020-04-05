
import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize(__GA_ID);

class Analytics extends React.Component {
	constructor(props) {
		super(props);
		this.prevpath = "";
	}
	get path() {
		return this.props.location.pathname + this.props.location.search;
	}
	render() {
		if (this.path == this.prevpath) {
			return null;
		}
		this.prevpath = this.path;
		console.log('analytics', this.path);
		ReactGA.set({ page: this.path });
		ReactGA.pageview(this.path);
		return null;
	}
}


export default Analytics
