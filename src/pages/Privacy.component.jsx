// ./src/WFH.component.jsx
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

import Page from './parts/Page.component.jsx'
import TitleBanner from "./parts/TitleBanner.component.jsx";
import Game from "./game/Game.component.jsx";

import PrivacyMD from '../config/_privacy_policy.md';
import ReactMarkdown from 'react-markdown/with-html';

class Privacy extends React.Component {
	constructor(props) {
		super(props);

		this.privacy = PrivacyMD;
	}
    render() {
    	return (<Page>
        			<Helmet>
                        <title>{__SITE_NAME} - Privacy Policy</title>
                    </Helmet>
        			<TitleBanner title="Privacy Policy"/>

                    <div className='privacy-policy-posts-container' >
						<div className='container '>
							<div className='row '>
								<div className='span12'>
									<div className='privacy-policy'>
										<ReactMarkdown source={this.privacy} escapeHtml={false} />
									</div>
								</div>
							</div>
						</div>
					</div>
        		</Page>);
    }
}

export default Privacy
