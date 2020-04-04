// ./src/WFH.component.jsx
import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Page from './parts/Page.component.jsx'
import TitleBanner from "./parts/TitleBanner.component.jsx";
import FlexibleList from './parts/FlexibleList.component.jsx'
import Game from "./game/Game.component.jsx";

import WFHData from '../config/WFH.js'

class WFH extends React.Component {
    render() {
    	return (<Page>
                    <Helmet>
                        <title>{__SITE_NAME} - Client Work</title>
                    </Helmet>

                    {/*
                    <TitleBanner title="Client Work"/>
                    <div className="container">
                        <h4>We offer a range of services in the digital/interactive space, from web and app development, right on through to games and more!</h4>
                        <h5>Happy clients:</h5>
                        <p>Aardman Animations, BBC, Mangahigh, Game Jolt, Auroch Digital, Mobile Pie, Opposable Games, Testimony Films, Wellcome Trust.</p>
                    </div>
                    <br/>*/
                    }

        			<TitleBanner title="Client Work"/>

                    {/*<div className="container" style={{clear:"both"}}>
                        <p>Of course, not <i>all the work we've ever done</i> is listed here - some of it has been "white label".</p>
                        <p>Get in touch for any game / web development requirements.</p>
                    </div>*/}
                    <div className="wfh">
                        <FlexibleList size={2} maxSize={WFHData.length} renderChild={(index)=>{
                            const wfh = WFHData[index];
                            return <Game key={wfh.id} game={wfh} />;
                        }}/>
        			</div>
        		</Page>);
    }
}

export default WFH
