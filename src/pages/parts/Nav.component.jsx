import React from 'react';
import { NavLink } from 'react-router-dom';
import jQuery from 'jquery';

class Nav extends React.Component {
	componentDidMount() {
		jQuery(window).resize(function() {
			if (jQuery(window).width() > 767) {
				jQuery('.navigation-flyout').slideUp(200);
			}
		});
	}
	toggleFlyout() {
		jQuery('.navigation-flyout').slideToggle(200);
	}
    render(){
        return (<div id='nav'>
        			<nav className='span7 hidden-phone'>
						<NavLink exact to="/" activeClassName="selected">HOME</NavLink>
						<NavLink to="/games" activeClassName="selected">GAMES</NavLink>
						<NavLink to="/wfh" activeClassName="selected">CLIENT WORK</NavLink>
						<NavLink to="/blog" activeClassName="selected">BLOG</NavLink>
						<NavLink to="/press" activeClassName="selected">PRESS KIT</NavLink>
						<NavLink to="/contact" activeClassName="selected">GET IN TOUCH</NavLink>
					</nav>
					<div className='navigation-flyout-button visible-phone' onClick={this.toggleFlyout}></div>
					<div className='navigation-flyout'>
						<NavLink onClick={this.toggleFlyout} exact to="/" activeClassName="selected">HOME</NavLink>
						<NavLink onClick={this.toggleFlyout} to="/games" activeClassName="selected">OUR GAMES</NavLink>
						<NavLink onClick={this.toggleFlyout} to="/wfh" activeClassName="selected">CLIENT WORK</NavLink>
						<NavLink onClick={this.toggleFlyout} to="/blog" activeClassName="selected">BLOG</NavLink>
						<NavLink onClick={this.toggleFlyout} to="/press" activeClassName="selected">PRESS KIT</NavLink>
						<NavLink onClick={this.toggleFlyout} to="/contact" activeClassName="selected">GET IN TOUCH</NavLink>
					</div>
				</div>);
    }
}
export default Nav;
