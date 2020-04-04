
// import <script src="/_js/confetti.min.js"></script>
import confetti from '../../vendor/confetti.min.js';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import FormState from '../forms/FormState';
import { connect } from 'react-redux';
import $ from 'jquery';

import {
	showMailingList,
	submitMailingList,
	dismissMailingListModal,
	dismissMailingListTooltip,
	resetMailingList,
	debugForceMailingListSuccess
} from './Actions';

class MailingListModal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: ""
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);

		this.centerVertically = () => {
			const overlay = findDOMNode(this.refs.overlay);

			var boxHeight = parseInt($(overlay).css("height"));
			var windowHeight = window.innerHeight;
			var topY = ((windowHeight - boxHeight) * 0.4);
			$(overlay).css("top", topY);
		};
		this.tryNewsletterSubmit = () => {
			this.props.submitMailingList(this.state.name, this.state.email);
		}
	}
	componentDidMount() {
		this.centerVertically();
		window.addEventListener('resize', this.centerVertically, false);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.centerVertically, false);
	}
	componentDidUpdate(prevProps, prevState) {
		this.centerVertically();

		// if (this.props.formState == FormState.INIT && this.props.modalVisible) {
		// 	setTimeout(()=>{
		// 		this.props.debugForceMailingListSuccess();
		// 	}, 3000);
		// }

		if (this.props.formState == FormState.SUBMITTED && this.props.modalVisible) {
			confetti.start(2000, 120);

			setTimeout(() => {
				this.props.dismissMailingListModal();
			}, 4000);
		}
	}

	handleNameChange() {
		this.setState({name: event.target.value});
	}
	handleEmailChange() {
		this.setState({email: event.target.value});
	}

	shouldShowModal() {
		return shouldShowBasedOn(this.props.lastDismissedModal, this.props.submitted);
	}
	shouldShowTooltip() {
		return shouldShowBasedOn(this.props.lastDismissedTooltip, this.props.submitted);
	}



	newsletterSuccessEffect() {

	}

	resetNewsletter() {
		this.props.resetMailingList();
	}



	render() {
		//console.log(this.props);

		return (<div>
					<div id='mailing-list-header-tooltip' className={(!this.props.tooltipVisible?"closed":"")} ><span onClick={this.props.dismissMailingListTooltip} className='mlh-close-btn' style={{display: (!this.props.tooltipVisible?"none":"block") }}></span><p onClick={this.props.showMailingList}>Subscribe to Force Of Habit's newsletter and get the lowdown on latest games, special offers and other nice things!</p></div>

					<div>
						<div id='fullscreen-cover' className={(!this.props.modalVisible?"hidden":"")} ref='fullscreenCover' onClick={this.props.dismissMailingListModal}></div>
						<div id='mailing-list-overlay' className={(!this.props.modalVisible?"hidden":"")} ref="overlay">
							{(this.props.formState != FormState.SUBMITTED) &&
								<React.Fragment>
									<h3 className='no-show-mobile'>Join our Newsletter / Mailing List?</h3>
									<h3 className='only-show-mobile'>Join our Newsletter?</h3>
									<p className='no-show-mobile'>(Very sorry for the big pop-up!)</p>
									<p>We really want to keep you updated on our new game releases.<br/>We also sometimes send out cool things like <i>free games</i>, <i>concept art</i>, and <i>soundtracks</i>...<br/></p>

									<p>Would you maybe like some of that?</p>
									{(this.props.formState == FormState.ERROR) && <p id='mailing-list-error-container'>Oops! <span id='mailing-list-error-message'>{this.props.error}</span>. Try again?</p>}
								</React.Fragment>
							}
							{(this.props.formState == FormState.SUBMITTED) &&
								<React.Fragment>
									<h3 className='no-show-mobile'>Thank you!<br/>Thank you so much!</h3>
									<h3 className='only-show-mobile'>Thank you!<br/>Thank you so much!</h3>
									<p className='no-show-mobile'>Woooo!</p>
									<p>You won't regret it!</p>
									<p><small>(Extra wooooo!)</small></p>
								</React.Fragment>
							}

							{(this.props.formState != FormState.SUBMITTED) &&
								<form onSubmit={this.handleSubmit}>
									<input ref="name" type='text' onChange={this.handleNameChange} value={this.state.name} placeholder="Your Name" />
									<input ref="email" type='text' onChange={this.handleEmailChange} value={this.state.email} placeholder="Your Email Address" />
									<a className='download-button-a' onClick={this.tryNewsletterSubmit}>
										<div className='download-button website-button' style={{marginBottom:10}}>
										Yes please!
										</div>
									</a>
									<a onClick={this.props.dismissMailingListModal}><p style={{paddingBottom:0}}><small><small>No, thank you!</small></small></p></a>
								</form>
							}
						</div>
					</div>
				</div>);
	}
}


	function shouldShowBasedOn(time, submitted) {
		if (submitted) { return false; }

		if (time == 0) {
			return true;
		}

		var now = Math.floor(Date.now() / 1000);
		var oneMonth = 86400 * 28;
		if (time <= now - oneMonth) {
			return true;
		}
		return false;
	}

const mapStateToProps = (state, ownProps) =>{
	return {
		formState: state.mailingList.modal.state,
		error: state.mailingList.modal.error,
		submitted: state.mailingList.modal.lastSubmitted,
		lastDismissedModal: state.mailingList.modal.lastDismissed,
		lastDismissedTooltip: state.mailingList.tooltip.lastDismissed,

		modalVisible: state.mailingList.modal.lastDismissed == 0,// && !state.mailingList.modal.lastSubmitted,
		tooltipVisible: shouldShowBasedOn(state.mailingList.tooltip.lastDismissed, state.mailingList.modal.lastSubmitted)
	};
}

const mapDispatchToProps = {
	debugForceMailingListSuccess,
	showMailingList,
	submitMailingList,
	dismissMailingListModal,
	dismissMailingListTooltip,
	resetMailingList
}

export default connect(mapStateToProps, mapDispatchToProps)(MailingListModal);
