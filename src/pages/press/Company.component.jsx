import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown/with-html';

import PressKit_Factsheet from "./Factsheet.component.jsx";

class PressKit_Company extends React.Component {
	render() {
		if (!this.props.company) { return null; }

		return (<div className='container presskit'>
					<div className='row post'>
						<div className='span4'>
							<PressKit_Factsheet company={this.props.company} />
						</div>
						<div className='span8 content'>
							<img src='/_images/press-kit/header.png' title={this.props.company.title} alt={this.props.company.title} /><br/><br/>

							<h2 className='pretitle'>Description</h2>
							<ReactMarkdown source={this.props.company.description} escapeHtml={false}/>

							<h2 className='pretitle'>Releases</h2>
							<ul className='presskit'>
								<li><Link to='/press/toast-time-smash-up'>Toast Time: Smash Up!</Link></li>
								<li><Link to='/press/makenines'>makenines</Link></li>
								<li><Link to='/press/friendship-club'>Friendship Club</Link> (Steam Early Access)</li>
								<li><Link to='/press/toast-time'>Toast Time</Link></li>
							</ul><br/>

							<h2 className='pretitle'>Mini Releases</h2>
							<ul className='presskit'>
								<li><Link to='/press/neon-caves'>Neon Caves</Link> (mini release)</li>
								<li><Link to='/press/deep-heat'>Deep Heat</Link> (mini release)</li>
								<li><Link to='/press/sinking-feeling'>Sinking Feeling</Link> (mini release)</li>
								<li><Link to='/press/dysbiosis'>Dysbiosis</Link> (mini release)</li>
							</ul>
						</div>
					</div>
					<br/>
					<h2 className='pretitle'>Videos</h2>
					<div className='row post'>
						{this.props.company.trailers.map((v)=>{
							const d = v;
							const light = d.thumbnail?d.thumbnail:"false";
							var url = d.url;
							return (<div key={url} className='span6'>
										<h5>{d.name}</h5>
										<div className='player-wrapper'>
											<ReactPlayer url={url} light={light} className='react-player' width='100%' height='100%' controls={true} />
										</div>
									</div>);
						})}
					</div>
					<br/>

					<h2 className='pretitle'>Images</h2>
					<div className='row post'>
						<div className='span12'>
							<p>There are far more images available for Force Of Habit, but these are the ones we felt would be most useful to you. If you have specific requests, please do <Link to='/contact'>get in touch</Link>!</p>
						</div>
					</div><br/>
					<div className='row post'>
						<div className='span6'><img src='/_images/press-kit/jamchester.jpg' /></div>
						<div className='span6'><img src='/_images/press-kit/ashley-1.png' /></div>
						<div className='span4'><img src='/_images/press-kit/team-1.png' /></div>
						<div className='span8'><img src='/_images/press-kit/tiga-awards-2013.png' /></div>
					</div><br/>


					<h2 className='pretitle'>Logo &amp; Icon</h2>
					<div className='row post'>
						<div className='span12'>
							<img src='/_images/press-kit/logo.png'/>
						</div>
						<div className='span4'><img src='/_images/press-kit/FoH_logo_block_on-white_sm.png'/></div>
						<div className='span4'><img src='/_images/press-kit/FoH_logo_primary_on-black_lrg.png'/></div>
						<div className='span4'><img src='/_images/press-kit/FoH_logo_primary_on-black_sm.png'/></div>
					</div>
					<br/>

					<div className='row post'>
						<div className='span12'>

							<h2 className='pretitle'>Awards &amp; Recognition</h2>
							<ul className='presskit'>
								{this.props.company.awards.map((award) => {
									if (!award.visible) { return null; }
									return <li key={award.description}>"{award.description}" - <i>{award.info}</i></li>
								})}
							</ul><br/>

							<h2 className='pretitle'>Selected Articles</h2>
							<ul className='presskit'>
								<li>"Stalwarts of numerous jams who craft games of striking quality."<br/>
									<i>- Martin Robinson, <a href='http://eurogamer.net/articles/2013-07-03-rezzed-game-jam-2013'>Eurogamer</a></i></li>
								<li>"Intestinal immunology in the form of a tunnel shooter not dissimilar to Jeff Minter's iconic game 'Tempest'."<br/>
									<i>- Will Freeman, <a href='https://www.mcvuk.com/development/scientist-and-developer-team-wins-wellcome-trust-dev-contest'>Develop Online</a></i></li>
							</ul>
						</div>
					</div>

				</div>);
	}
}
export default PressKit_Company;








