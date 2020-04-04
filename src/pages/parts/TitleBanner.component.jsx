// ./src/parts/TitleBanner.component.jsx
import React from 'react';

class TitleBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
    	return (<div className='top-banner small top'>
					<div className='container'>
						<div className='row'>
							<div className='span12'>
								<div className='text'>
									<h1>{this.props.title}</h1>
								</div>
							</div>
						</div>
					</div>
				</div>);
    }
}

export default TitleBanner;
