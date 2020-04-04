// ./src/index.jsx
import React from 'react';

import {Helmet} from "react-helmet";
import { Router, BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux'

import Analytics from './helpers/Analytics.component.jsx'

// Import custom components
import Header from './pages/parts/Header.component.jsx'
import Footer from './pages/parts/Footer.component.jsx'
import CookieWarning from './pages/parts/CookieWarning.component.jsx'
import About from './pages/parts/About.component.jsx'

import MailingListModal from './pages/mailing-list/Modal.component.jsx'

import Home from './pages/Home.component.jsx'
import Games from './pages/Games.component.jsx'
import WFH from './pages/WFH.component.jsx'
import Blog from './pages/blog/Blog.component.jsx'
import PressKit from './pages/PressKit.component.jsx'
import Contact from './pages/Contact.component.jsx'
import Terms from './pages/Terms.component.jsx'
import Privacy from './pages/Privacy.component.jsx'
import Cookies from './pages/Cookies.component.jsx'
import MailingList from './pages/MailingList.component.jsx'
import PageNotFound from './pages/parts/PageNotFound.component.jsx'

class App extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {

	}
	componentWillUnmount() {

	}

	render() {

    	return (<div id='app'>
        			<Helmet>
		                <title>{__SITE_NAME}</title>
				        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

				        <meta name="author" content="Force Of Habit"/>
				        <meta name="description" lang="en" content="Force Of Habit is an independent game studio based in Bristol, UK. We experiment with new and interesting game mechanics. We offer services in rapid prototyping and web software. " />
				        <meta name='keywords' content='Force Of Habit, Ashley Gwinnell, indie game studio, experimental game design, audio design, web services' />
		            </Helmet>

		            <MailingListModal />
        			<Header/>

        			<Route path="/" component={Analytics} />

        			<Switch>
	        			<Route exact path="/" render={(props)=><Home app={this} {...props} /> } />
						<Route path="/games" component={Games}/>
						<Route path="/wfh" component={WFH}/>
						<Route path="/services" component={WFH}/>
						<Route path="/about" component={About} />
						<Route path="/blog" component={Blog} />
						<Route exact path="/press/:game" component={PressKit} />
						<Route exact path="/press" component={PressKit} />
						<Route path="/contact" component={Contact} />
						<Route path="/terms" component={Terms} />
						<Route path="/privacy" component={Privacy} />
						<Route path="/cookies" component={Cookies} />
						<Route path="/mailing-list" component={MailingList} />
						<Route component={PageNotFound}/>
					</Switch>

					<Footer/>
					<CookieWarning/>
        		</div>);
    }
}

// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) =>{
	return {
		loading: state.app.meta.loading,
		loaded: state.app.meta.loaded
	};
}

// ... normally is an object full of action creators
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

