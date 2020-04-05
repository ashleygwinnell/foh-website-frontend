import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class FlexibleList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            size: this.props.size,
			maxSize: this.props.maxSize
		};
		this.scrollEvent = ()=>{
            this.setState((state) => ({
                ...state,
                size: Math.min(state.size + 1, state.maxSize)
            }))
        };
	}
	componentDidMount() {
        window.addEventListener('scroll', this.scrollEvent, false);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollEvent, false);
    }

    render() {
        let a = [];
        for(var i = 0; i < this.state.size; i++) {
            a.push(this.props.renderChild(i));
        }
        return (<div>{a}</div>);

    }
}
FlexibleList.propTypes = {
  size: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  renderChild: PropTypes.func.isRequired
}
export default FlexibleList;
