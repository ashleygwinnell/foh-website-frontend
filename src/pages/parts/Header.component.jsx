// ./src/header.component.jsx
import React from 'react';

import Nav from './Nav.component.jsx'

class Header extends React.Component {
    render(){
        return (<div id='header'>
	        		<div className='container'>
						<div className="row">
							<div className="span12">
								<header className='row'>
						  			<div className='span5'>
						  				<div className='logo'><a href='/'><img src='/_images/logo.png' alt='Force Of Habit' title='Force Of Habit' /></a></div>
						  			</div>
						  			<Nav></Nav>
						  		</header>
						  	</div>
						</div>
					</div>
					<div className="top-banner-spacer"></div>
				</div>);
    }
}
export default Header
