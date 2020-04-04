// ./src/footer.component.jsx
import React from 'react';

class Footer extends React.Component {
    render(){
        return (<div>
	        		<div id='footer-container'>
						<div className='container'>
							<footer className="row">

								<div className="span8">
									<p className='footer'>Force Of Habit, 16 Chatterton Green, Whitchurch, Bristol, BS14 0DQ. Company No. 08198901<br/>
									Email : <a href='mailto:contact@forceofhab.it'>contact@forceofhab.it</a></p>
								</div>
								<div className='span4'>
									<p className='footer' align='right'>Visual Identity by <a href='https://www.damoncharles.com/' target='new'>Damon Charles</a><br/>
									<small>Made with <a href='https://reactjs.org/' target='new'>React</a> &amp; <a href='https://redux.js.org/' target='new'>Redux</a> &hearts; (<a href='https://github.com/ashleygwinnell' target='new'>Source</a>)</small></p>
								</div>
							</footer>
						</div>
					</div>

					<div id='footer-gplus'><a href="https://plus.google.com/110855029498522126523" rel="publisher">Google+</a></div>
				</div>);
    }
}
export default Footer


//<? include_once("pages/parts/footer-cookies.phtml");?>
