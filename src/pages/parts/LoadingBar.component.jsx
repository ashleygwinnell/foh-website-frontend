import React from 'react';
import PropTypes from 'prop-types'

import { NProgress } from '@tanem/react-nprogress'

// let BarID = 1;
class LoadingBar extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	id: BarID
		// };
		// BarID++;
	}
	componentDidMount() {

	}
	style(animationDuration, isFinished, progress) {
		return {
			position: "fixed",
			top:0,
			height:3,
			backgroundColor: "#00e174",
			width: '100%',
			marginLeft: `${(-1 + progress) * 100}%`,
			transition: `margin-left ${animationDuration}ms linear`,
    	};
	}
	containerStyle(animationDuration, isFinished, progress) {
		return  {
			position: "fixed",
			top:0,
			left:0,
			opacity: isFinished ? 0 : 1,
			pointerEvents: 'none',
			transition: `opacity ${animationDuration}ms linear`,
			zIndex:10
    	};
	}
	render() {
		// if (this.props.loaded) {
		// 	setTimeout(()=>{

		// 	})
		// }
		//console.log(this.props);
		return <NProgress isFinished={this.props.loaded} isAnimating={this.props.loading}>
				    {({ animationDuration, isFinished, progress }) => {
				    	//console.log(this.state.id, animationDuration, isFinished, progress)
				    	return (<div guid={this.props.guid} style={this.containerStyle(animationDuration, isFinished, progress)}><div style={this.style(animationDuration, isFinished, progress)}></div></div>);
				    }}
				</NProgress>
	}
}
LoadingBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired
}
export default LoadingBar;

