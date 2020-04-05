// ./src/WFH.component.jsx
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

import { showMailingList } from './mailing-list/Actions';

import Page from './parts/Page.component.jsx'
import TitleBanner from "./parts/TitleBanner.component.jsx";
import ReactMarkdown from 'react-markdown/with-html';

import { connect } from 'react-redux'

class MailingList extends React.Component {
	componentDidMount() {
		this.props.showMailingList();
	}
	showNewsletter() {

	}
    render() {
    	return (<Page>
    				<Helmet>
                        <title>{__SITE_NAME} - Mailing List</title>
                    </Helmet>
        			<TitleBanner title="Mailing List"/>

                    <div className='container'>
						<div className='row'>
							<div className='span12 '>
								<center>
									<br/><p>If you arrived here - Firstly: whoa! Secondly: thanks!</p>

									<a className='download-button-a' onClick={this.props.showMailingList}>
										<div className='download-button mailinglist-button'>
											Show Mailing List form
										</div>
									</a>

									<p>Show the form by hitting the button above.</p>
									<br/>
								</center>

							</div>
						</div>
					</div>
        		</Page>);
    }
}

// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) =>{
    return {

    };
}

// ... normally is an object full of action creators
const mapDispatchToProps = {
    showMailingList
}

export default connect(mapStateToProps, mapDispatchToProps)(MailingList);

