// ./src/about.component.jsx
import React from 'react';

class About extends React.Component {
    render(){
        return (<div className='about-container'>
					<div className='container'>
						<div className='row'>

							<div className='span6 my-container'>
								<div className='span4'>
									<h1 className='plain'>About</h1>
									<p className='b'>Force Of Habit was a tiny, experiment-driven, independent games studio based in Bristol, founded by Ashley Gwinnell and Nick Dymond.</p>

									<p className='about'>Things we loved:</p>
									<ul className='myul'>
										<li className='about'>Experimenting with game mechanics</li>
										<li className='about'>Super-slick tweens &amp; game feel</li>
										<li className='about'>All things unusual &amp; interesting: demoscene / shaders / visual effects / art styles</li>
									</ul>

									<p className='about'>We specialised in the things we loved, but also rapid prototyping, native development and web game projects.</p>
									<p className='about'>Interested in work for hire? You're too late.<br/><br/> If you want to leave a nice message about what our games meant to you, <a href='/contact/'>your best bet is Twitter</a>!</p>
								</div>
								<div className='span2'>

								</div>
							</div>


							<div className='span1'></div>
							<div className='span4'>
								<div className='bio'>
									<div className='face'><img src='/_images/about-ashley.png'/></div>
									<p className='b'>Ashley Gwinnell</p>
									<p className='about'><i>Director. Art &amp; Development</i></p>
									<p className='about'>Ashley is an avid game jammer and tinkerer who co-founded Force Of Habit in 2012 after graduating Computer Science at Bournemouth University.</p>
									<p className='about'>He is honest &amp; forthright with game design feedback and has one of those thick / funny Bristol accents.</p>
									<p className='about'><b><i>'Ere!</i></b></p>

								</div>
							</div>


						</div>
					</div>
				</div>);
    }
}
export default About
