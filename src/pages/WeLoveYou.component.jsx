// ./src/index.jsx
import React from 'react';
import {Helmet} from "react-helmet";

import TitleBanner from "./parts/TitleBanner.component.jsx";
import Page from './parts/Page.component.jsx'

class WeLoveYou extends React.Component {
	constructor(props) {
		super(props);
	}

    render(){
        return (<Page>
                    <Helmet>
                        <title>{__SITE_NAME} - Thank you!</title>
                    </Helmet>
                    <TitleBanner title="Thank you!"/>
                    <div className='container'>
                        <div className='row'>
                            <div className='span12 '>
                                <center>
                                    <br/><h3>WE LOVE YOU!</h3>
                                    <img src='/_images/games/toast-time/beta-complete.png' alt='TERRY does too!' title='TERRY does too!'/> <br/>
                                </center>
                                <div style={{float:"right"}}><br/><h4>- Ashley (&amp; TERRY)</h4></div>
                            </div>
                        </div>
                    </div>
        		</Page>);
    }
}

export default WeLoveYou;
