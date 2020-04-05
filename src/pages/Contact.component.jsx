// ./src/Contact.component.jsx
import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';

import Page from './parts/Page.component.jsx'
import TitleBanner from "./parts/TitleBanner.component.jsx";
import { connect } from 'react-redux';
import { showMailingList } from './mailing-list/Actions';

class Contact extends React.Component {

    render() {
        return (<Page>
        			<Helmet>
                        <title>{__SITE_NAME} - Get In Touch</title>
                    </Helmet>

                    <TitleBanner title="Get In Touch"/>

					<div className='top-banner-spacer'></div>
					<div className='top-banner-spacer visible-phone'></div>

					<div className='contact'>
						<div className='container'>
							<div className='row'>
								<div className='span12' >
									<h2 className='pretitle'>HERE'S HOW:</h2>
									<a className='download-button-a' href='mailto:contact@forceofhab.it' target='new'>
										<div className='download-button mailinglist-button'>
											EMAIL
										</div>
									</a>
									<a className='download-button-a' href='http://twitter.com/forcehabit' target='new'>
										<div className='download-button twitter-button'>
											Twitter
										</div>
									</a>
									<a className='download-button-a' href='http://facebook.com/forcehabit' target='new'>
										<div className='download-button facebook-button'>
											Facebook
										</div>
									</a>
									<a className='download-button-a' href='http://youtube.com/forcehabit' target='new'>
										<div className='download-button youtube-button'>
											YouTube
										</div>
									</a>
									<a className='download-button-a' href='http://instagram.com/forceofhabitgames' target='new'>
										<div className='download-button instagram-button'>
											Instagram
										</div>
									</a>
									<a className='download-button-a' href='http://forceofhab.it/discord/' target='new'>
										<div className='download-button discord-button'>
											Discord Community
										</div>
									</a>

									<a className='download-button-a' onClick={this.props.showMailingList}>
										<div className='download-button mailinglist-button'>
											Mailing List
										</div>
									</a>
									<br/>

									<h2 className='pretitle'>Small Print:</h2>
									<ul>
										{/*<li><p className='bigger'><Link to='/monetize'>YouTube/Twitch Monetisation Permission</Link></p></li>*/}
										<li><p className='bigger'><Link to='/cookies'>Cookie Policy</Link></p></li>
										<li><p className='bigger'><Link to='/privacy'>Privacy Policy</Link></p></li>
										<li><p className='bigger'><Link to='/terms'>Terms &amp; Conditions</Link></p></li>
									</ul>

								</div>
							</div>


						</div>
					</div>
        		</Page>);
    }
}

const mapDispatchToProps = {
	showMailingList
}

export default connect(null, mapDispatchToProps)(Contact);
