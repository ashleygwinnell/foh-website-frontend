// ./src/index.jsx
import React from 'react';
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';

import HeaderMini from './parts/HeaderMini.component.jsx'
import Page from './parts/Page.component.jsx'

class Links extends React.Component {
	constructor(props) {
		super(props);
	}
    getLine() {
        var lines = [
            "Enjoy your stay!",
            "Thanks for dropping by!",
            "Have a pleasant onward journey!",
            "*Insert Copyright Notice*"
        ];
        return lines[Math.floor(Math.random() * lines.length-1)];
    }
    render(){
        return (<Page>
                    <HeaderMini />

                    <div className='links' style={{textAlign:"center"}}>
                        <div className='container'>
                            <div className='row'>
                                <div className='span2'></div>
                                <div className='span8'>

                                    <p>We make awesome video games! &trade;</p>

                                    <a className='download-button twitter-button' href='http://twitter.com/forcehabit' target='new'>Twitter</a>
                                    <a className='download-button facebook-button' href='http://facebook.com/forcehabit' target='new'>Facebook</a>
                                    <a className='download-button patreon-button' href='https://www.patreon.com/forceofhabit' target='new'>Patreon</a>
                                    <a className='download-button instagram-button' href='http://instagram.com/forceofhabitgames' target='new'>Instagram</a>
                                    <a className='download-button youtube-button' href='http://youtube.com/forcehabit' target='new'>YouTube</a>
                                    <a className='download-button steam-button' href='https://store.steampowered.com/developer/forceofhabit/' target='new'>Steam</a>
                                    <NavLink to="/" className="download-button website-button">Website</NavLink>
                                    <a className='download-button discord-button' href='http://forceofhab.it/discord/' target='new'>Discord Community</a>
                                    <NavLink to="/mailing-list" className="download-button mailinglist-button">Mailing List</NavLink>
                                    <NavLink to="/press" className="download-button presskit-button">Press Kit</NavLink>

                                    <p><i>{this.getLine()}</i><br/><br/></p>

                                    {<p><i>&copy; Force Of Habit</i><br/><br/></p>}

                                </div>
                                <div className='span2'></div>
                            </div>

                        </div>
                    </div>


        		</Page>);
    }
}

export default Links;
