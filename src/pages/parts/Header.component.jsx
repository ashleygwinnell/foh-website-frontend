// ./src/header.component.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav.component.jsx'

class Header extends React.Component {
    render(){
        return (<div>
					<div style={{marginBottom:16, backgroundColor:"#845ae5", borderBottom:"5px solid black", fontFamily:"Whitney, Helvetica Neue, sans-serif"}}>
						<div className='container'>
							<div className="row">
								<div className="span12">
									<div style={{textAlign:"center", padding:"20px"}}>
										<img src='.' width={80} height={80}/>
										<h1 style={{fontFamily:"Whitney", fontWeight:600, color:"white", marginBottom:10}}>IMPRESS</h1>
										<p style={{fontFamily:"Whitney, Helvetica Neue, sans-serif", paddingBottom:10, color:"white", fontSize:"20px"}}>Force Of Habit is closing its doors indefinitely</p>
										
										<NavLink to="/blog/moving-on-to-make-us-better" className="impress-button" style={{marginBottom:5,marginTop:5}}>Read the blog post</NavLink><br/>
										
										<div><button className="impress-button" style={{marginBottom:5}} onClick={()=>{
											window.location.href = "https://impress.games/";
										}}>Continue the journey?</button></div>
										<span>(Recommended for video game developers!)</span>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id='header'>
						<div className='container'>
							<div className="row">
								<div className="span12">
									<header className='row'>
										<div className='span4'>
											<div className='logo'><a href='/'><img src='/_images/logo.png' alt='Force Of Habit' title='Force Of Habit' /></a></div>
										</div>
										<Nav></Nav>
									</header>
								</div>
							</div>
						</div>
						<div className="top-banner-spacer"></div>
					</div>
				</div>);
    }
}
export default Header
