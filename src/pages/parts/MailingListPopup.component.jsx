// // ./src/parts/MailingListPopup.component.jsx
// import React, { Component } from 'react';
// import {Helmet} from "react-helmet";
// import {Link} from 'react-router-dom';
// import jQuery from 'jquery';

// <script src="/_js/confetti.min.js"></script>

// class MailingListPopup extends React.Component {

//     shouldShowNewsletter() {
//         var newsletterSubmitted = window.localStorage.lastSubmittedNewsletter;
//         if (typeof newsletterSubmitted != 'undefined') { // we have submitted it before, so don't show it.
//             return false;
//         }

//         var lastDismissed = window.localStorage.lastDismissedNewsletter;
//         if (typeof lastDismissed == 'undefined') {
//             return true;
//         }
//         var lastDismissedTime = Number(window.localStorage.lastDismissedNewsletter);
//         if (isNaN(lastDismissedTime)) {
//             return true;
//         }
//         var now = Math.floor(Date.now() / 1000);
//         var oneMonth = 86400 * 28;
//         if (lastDismissedTime <= now - oneMonth) {
//             return true;
//         }
//         return false;
//     }

//     shouldShowNewsletterTooltip() {
//         var newsletterSubmitted = window.localStorage.lastSubmittedNewsletter;
//         if (typeof newsletterSubmitted != 'undefined') { // we have submitted it before, so don't show it.
//             return false;
//         }
//         var lastDismissed = window.localStorage.lastDismissedNewsletterTooltip;
//         if (typeof lastDismissed == 'undefined') {
//             return true;
//         }
//         var lastDismissedTime = Number(window.localStorage.lastDismissedNewsletterTooltip);
//         if (isNaN(lastDismissedTime)) {
//             return true;
//         }
//         var now = Math.floor(Date.now() / 1000);
//         var oneMonth = 86400 * 28;
//         if (lastDismissedTime <= now - oneMonth) {
//             return true;
//         }
//         return false;
//     }
//     noNewsletterPleaseButton() {
//         window.localStorage.lastDismissedNewsletter = Math.floor(Date.now() / 1000);
//         jQuery('#fullscreen-cover').fadeOut();
//         jQuery('#mailing-list-overlay').fadeOut();
//     }
//     noNewsletterTooltipPlease() {
//         window.localStorage.lastDismissedNewsletterTooltip = Math.floor(Date.now() / 1000);
//         jQuery('#mailing-list-header-tooltip').slideUp();
//         jQuery('#mailing-list-header-tooltip').fadeOut();
//     }
//     tryNewsletterSubmit() {
//         var name = jQuery('#mailing-list-name').val();
//         var email = jQuery('#mailing-list-email').val();
//         //console.log(name, email);
//         newsletterSubmit(name, email);
//     }
//     newsletterSubmit(name,email) {
//         jQuery('#mailing-list-error-container').hide();
//         var url = "/mailing-list/subscribe/?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
//         var failFunc = function(message) {
//             jQuery('#mailing-list-error-container').show();
//             jQuery('#mailing-list-error-message').html(message);
//         }
//         var successFunc = function() {
//             window.localStorage.lastSubmittedNewsletter = Math.floor(Date.now() / 1000);
//             newsletterSuccessEffect();
//         }
//         jQuery.ajax( url )
//             .done(function(result) {
//                 console.log('mail result', result);
//                 if (result == "true") {
//                     successFunc();
//                 } else {
//                     failFunc(result);
//                 }
//             })
//             .fail(failFunc);

//         return;
//     }
//     newsletterSuccessEffect() {
//         confetti.start(2000, 120);
//         jQuery('#mailing-list-overlay h3').html("Thank you!<br/>Thank you so much!");
//         jQuery(jQuery('#mailing-list-overlay p')[0]).html("Wooooo!");
//         jQuery(jQuery('#mailing-list-overlay p')[1]).html("You won't regret it!");
//         jQuery(jQuery('#mailing-list-overlay p')[2]).html("<small>(Extra wooooo!)</small>");
//         jQuery('#mailing-list-overlay form').hide();

//         jQuery('#mailing-list-overlay').animate()

//         setTimeout(function() {
//             jQuery('#confetti-canvas').css("position", "fixed");
//             jQuery('#fullscreen-cover').fadeOut();
//             jQuery('#mailing-list-overlay').fadeOut();
//         }, 3000);
//     }
//     showNewsletterTooltip() {
//         jQuery('#mailing-list-header-tooltip').show();
//     }
//     showNewsletter() {
//         centerNewsletterVertically();
//         jQuery('#fullscreen-cover').fadeIn();
//         jQuery('#mailing-list-overlay').fadeIn();
//     }
//     showNewsletterImmediate() {
//         centerNewsletterVertically();
//         jQuery('#fullscreen-cover').show();
//         jQuery('#mailing-list-overlay').show();
//     }
//     centerNewsletterVertically() {
//         var boxHeight = parseInt(jQuery('#mailing-list-overlay').css("height"));
//         var windowHeight = window.innerHeight;
//         var topY = ((windowHeight - boxHeight) * 0.4);
//         jQuery('#mailing-list-overlay').css("top", topY);
//     }
//     resetNewsletter() {
//         delete window.localStorage.lastSubmittedNewsletter;
//         delete window.localStorage.lastDismissedNewsletter;
//         delete window.localStorage.lastDismissedNewsletterTooltip;
//     }

//     componentDidMount() {
//         jQuery(document).ready(function(){
//             window.onresize = function() {
//                 centerNewsletterVertically();
//             }
//             if (shouldShowNewsletterTooltip()) {
//                 showNewsletterTooltip();
//             }
//             setTimeout(function(){
//                 if (shouldShowNewsletter()) {
//                     showNewsletter();
//                 }
//             }, 1000);

//         });
//     }
//     render() {
//         return (<div>
//                     <div id='mailing-list-header-tooltip'><span onclick="noNewsletterTooltipPlease()" class='mlh-close-btn'></span><p onClick={this.showNewsletter()}>Click here to subscribe to Force Of Habit's newsletter and get the lowdown on latest games, special offers and other nice bits like that!</p></div>

//                     <div id='fullscreen-cover' onclick="noNewsletterPleaseButton()"></div>
//                     <div id='mailing-list-overlay'>
//                         <h3 class='no-show-mobile'>Join our Newsletter / Mailing List?</h3>
//                         <h3 class='only-show-mobile'>Join our Newsletter?</h3>
//                         <p class='no-show-mobile'>(Very sorry for the big pop-up!)</p>
//                         <p>We really want to keep you updated on our new game releases.<br/>We also sometimes send out cool things like <i>free games</i>, <i>concept art</i>, and <i>soundtracks</i>...<br/></p>

//                         <p>Would you maybe like some of that?</p>
//                         <p id='mailing-list-error-container'>Oops! <span id='mailing-list-error-message'></span>. Try again?</p>

//                         <form>
//                             <input id='mailing-list-name' type='text' placeholder="Your Name" />
//                             <input id='mailing-list-email' type='text' placeholder="Your Email Address" />
//                             <a href='javascript:;' class='download-button-a' onclick="tryNewsletterSubmit()">
//                                 <div class='download-button website-button' style='margin-bottom:10px;'>
//                                 Yes please!
//                                 </div>
//                             </a>
//                             <a href='javascript:;' onclick="noNewsletterPleaseButton();"><p style='padding-bottom:0px;'><small><small>No, thank you!</small></small></p></a>
//                         </form>

//                     </div>
//                 </div>);
//     }
// }

// export default MailingListPopup;
