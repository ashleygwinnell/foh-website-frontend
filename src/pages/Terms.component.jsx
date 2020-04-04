// ./src/WFH.component.jsx
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

import Page from './parts/Page.component.jsx'
import TitleBanner from "./parts/TitleBanner.component.jsx";
import Game from "./game/Game.component.jsx";

import TermsMD from '../config/_terms_and_conditions.md';
import ReactMarkdown from 'react-markdown/with-html';

class Terms extends React.Component {
    render() {
    	return (<Page>
        			<Helmet>
                        <title>{__SITE_NAME} - Terms & Conditions</title>
                    </Helmet>
                    <TitleBanner title="Terms & Conditions"/>

                    <div className='privacy-policy-posts-container' >
						<div className='container '>
							<div className='row '>
								<div className='span12'>
									<div className='privacy-policy'>
										<ReactMarkdown source={TermsMD} escapeHtml={false} />
									</div>
								</div>
							</div>
						</div>
					</div>
        		</Page>);
    }
}

export default Terms
