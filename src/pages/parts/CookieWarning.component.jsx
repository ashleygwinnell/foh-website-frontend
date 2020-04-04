// ./src/cookie-warning.component.jsx
import React from 'react';
import {Link} from 'react-router-dom';

class CookieWarning extends React.Component {
	constructor(props){
		super(props);
		this.state = { visible: true };
	}
	shouldShowCookieWarning() {
		return window.localStorage.closedCookieWarning != "true";
	}
	closeCookieWarning() {
		//console.log('close cookie warning', this);
		window.localStorage.closedCookieWarning = "true";
		// this.setState((state, props) => ({
		// 	visible:false
		// }));
		this.setState({ visible:false });
	}
	componentDidMount() {
		if (!this.shouldShowCookieWarning()) {
			this.closeCookieWarning();
		}
	}
	componentWillUnmount() {

	}
    render(){
    	// console.log('rendering', this.state.visible);
    	if (!this.state.visible) {
	    	return null;
		}
        return (<div>
					<div id='cookie-warning' className='cookie-warning-dismiss'>
						<div className='container'>
							<div className='fl span10'><p><u>Cookies</u>:<br/> This website uses cookies to provide you with the best user experience and to deliver advertising messages and offers that are relevant to you. To read more about the cookies we use, see our <Link to='/cookies'>cookies policy</Link>.</p></div>
							<div className='span1' ><p style={{cursor:'pointer'}} onClick={this.closeCookieWarning.bind(this)}><u>OK / Dismiss</u></p></div>
						</div>
					</div>
					<div className='cookie-warning-dismiss'><br/><br/><br/></div>

        		</div>);
    }
}
export default CookieWarning
