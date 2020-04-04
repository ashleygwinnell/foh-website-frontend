// ./src/index.jsx
import React from 'react';

class HeaderMini extends React.Component {
	constructor(props) {
		super(props);
	}
    render(){
        return (<div className='container'>
					<div className="row">
						<div className="span12">
							<header className='row'>
					  			<div className='span2'></div>
					  			<div className='span8'>
					  				<br/>
					  				<img width="100%" src='/_images/press-kit/header.png' alt='Force Of Habit' title='Force Of Habit' />
									<h1 className='prehead' style={{color:"white",textAlign:"center",fontSize:"30pt",fontWeight:"normal"}}>Force Of Habit</h1>
					  			</div>
					  			<div className='span2'></div>
					  		</header>
					  	</div>
					</div>
				</div>);
    }
}

export default HeaderMini;



