// ./src/games.component.jsx
import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import TitleBanner from "./parts/TitleBanner.component.jsx";
import Page from './parts/Page.component.jsx'
import FlexibleList from './parts/FlexibleList.component.jsx'
import Game from "./game/Game.component.jsx";
import GameStatus from "./game/GameStatus.js";

import GamesData from '../config/Games.js'

import { connect } from 'react-redux'

// More components
const GameFilterView = {
    ALL: "All",
    RELEASED: "Releases",
    EXPERIMENT: "Experiments & Jams"
};

class Games extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {
                view: GameFilterView.ALL
            },
            games: GamesData
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    updateFilter(e) {
        const view = e.target.attributes['filter-data'].value;
        this.setState({
            filter: {
                ...this.state.filter,
                view: view
            }
        });
    }
    getFilterClassName(view) {
        if (this.state.filter.view == view) {
            return "filter selected";
        }
        return "filter";
    }
    canView(game) {
        if ((this.state.filter.view == GameFilterView.ALL) ||
            (this.state.filter.view == GameFilterView.RELEASED && (game.status == GameStatus.RELEASED || game.status == GameStatus.RELEASED_BETA || game.status == GameStatus.MINI)) ||
            (this.state.filter.view == GameFilterView.EXPERIMENT && game.status == GameStatus.EXPERIMENT))
            {
            return true;
        }
        return false;
    }

    render() {

    	return (<Page>
                    <Helmet>
                        <title>{__SITE_NAME} - Games</title>
                    </Helmet>

        			<TitleBanner title="Our Games"/>

                    <div className='game-selection'>
                        <div className='container'>
                            <div className='row'>
                                <div className='span12'>
                                    <div className='filter-games-line'></div>
                                    <div className='filter-games'>
                                        <a onClick={this.updateFilter.bind(this)} className={this.getFilterClassName(GameFilterView.ALL)} filter-data={GameFilterView.ALL}>{GameFilterView.ALL}</a>
                                        <a onClick={this.updateFilter.bind(this)} className={this.getFilterClassName(GameFilterView.RELEASED)} filter-data={GameFilterView.RELEASED}>{GameFilterView.RELEASED}</a>
                                        <a onClick={this.updateFilter.bind(this)} className={this.getFilterClassName(GameFilterView.EXPERIMENT)} filter-data={GameFilterView.EXPERIMENT}>{GameFilterView.EXPERIMENT}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="games">
                        <FlexibleList size={3} maxSize={GamesData.length} renderChild={(index)=>{
                            const game = GamesData[index];
                            if (this.canView(game))
                                return <Game key={game.id} game={game} />;
                            return null;
                        }}/>
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
    //setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
