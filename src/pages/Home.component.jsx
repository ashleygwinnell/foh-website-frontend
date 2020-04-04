// ./src/index.jsx
import React from 'react';
import {Helmet} from "react-helmet";

import Page from './parts/Page.component.jsx'
import Banner from './parts/Banner.component.jsx'
import About from './parts/About.component.jsx'
import Latest from './parts/Latest.component.jsx'

import Game from './game/Game.component.jsx'

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
    render(){
        return (<Page>
        			<Banner/>
        			<div className="games">
        				<Game latest/>
        			</div>
        			<About/>
        			<Latest/>
        		</Page>);
    }
}

export default Home;
