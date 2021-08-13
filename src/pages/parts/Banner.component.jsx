// ./src/banner.component.jsx
import React from 'react';

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
		this.options = [
			// {
			// 	text: "\"All Things Game Feel\" talk now on YouTube!"
			// },
			{
				text: "Neon Caves out now on <a href='https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Neon-Caves-1528050.html' target='new'>Nintendo Switch</a>!"
			},
			// {
			// 	text: "Neon Caves out now on <a href='https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Neon-Caves-1528050.html' target='new'>Nintendo Switch</a>!"
			// },
			{
				text: "Toast Time: Smash Up! out now on <a href='https://www.nintendo.com/games/detail/toast-time-smash-up-switch/' target='new'>Nintendo Switch</a>!"
			},
			{
				text: "An experiment-driven indie games studio!!"
			},
			// {
				// text: "Force Of Habit is an experiment-driven indie games studio!"
				// text: "Force Of Habit was an experiment-driven indie games studio! 2012 - 2020"
			// }
			// {
			// 	text: "We are sorry to say that Force Of Habit is no more."
			// }
		];

		this.interval = setInterval(()=>{
			this.goRight();
		},6000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	goLeft() {
		var i = this.state.index - 1;
		if (i < 0) {
			i = this.options.length - 1;
		}
		this.setState({index: i});
	}
	goRight() {
		var i = (this.state.index + 1) % this.options.length;
		this.setState({index: i});
	}
	getContent() {
		return this.options[this.state.index].text;
	}
    render(){
    	return (<div className='top-banner top'>
    				{this.options.length > 1 && <a className='carousel-arrow left' href="" onClick={()=>{clearInterval(this.interval); this.goLeft();}}>&lt;</a>}
    				{this.options.length > 1 && <a className='carousel-arrow right' href="" onClick={()=>{clearInterval(this.interval); this.goRight(); }}>&gt;</a>}
					<div className='container squash'>
						<div className='text'>
							<h1 dangerouslySetInnerHTML={{__html: this.getContent()}}></h1>
						</div>
					</div>
				</div>);
    }
}

export default Banner

/*

<!-- <div class='text' > -->
							<!-- <h1>Timmy Bibble's Friendship Club, now <a href='/games/#timmy-bibbles-friendship-club' target='new'>available to play</a> for you and your friends!</h1> -->

							<!-- <h1>Friendship Club is available now. <a href='http://timmybibble.com/' target='new' target='new'>Preorder for early beta access!</a></h1>  -->

							<!-- <h1>Neon Caves is coming to OUYA on August 14th!</h1>  -->

							<!-- <h1>Toast Time out now on <a href='https://itunes.apple.com/us/app/toast-time/id722232991?ls=1&mt=8' target='new'>iOS</a> &amp; <a href='https://play.google.com/store/apps/details?id=org.forceofhabit.toasttime' target='new'>Android</a>. Watch the new <a href='http://www.youtube.com/watch?v=liEGGWVRVjo' target='new'>cinematic trailer</a>!</h1>-->

							<!-- <h1>Toast Time <a href='http://forcehabit.bandcamp.com/album/toast-time-ost' target='new'>soundtrack</a> is out now on Bandcamp!</h1> -->
							<!-- <h1>Force Of Habit's debut game <a href='https://play.google.com/store/apps/details?id=org.forceofhabit.toasttime' target='new'>Toast Time</a> is out now!</h1> -->
						<!-- </div> -->
						<!-- <div class='text' style='width:900px;'>
							<h1>Toast Time is out now on <a href='http://store.steampowered.com/app/316660' target='new'>Steam</a>!</h1>
						</div> -->

						<!--<div class='text' style='width:900px;'>
							<h1>Sinking Feeling is out now on<br/> iOS &amp; Android!</h1>
						</div> -->

						<!-- <div class='text' style='width:900px;'>
							<h1>Friendship Club is out now<br/> on <a href='http://store.steampowered.com/app/332760' target='new'>Steam Early Access</a>!</h1>
						</div> -->

						<!--<div class='text' style='width:900px;'>
							<h1>makenines is out now on<br/>iOS &amp; Android!</h1>
						</div>-->

						<!--<div class='text' style='width:900px;'>
							<h1>makenines<br/> iOS &amp; Android - September 9th!</h1>
						</div>-->

						<!-- <div class='text'>
							<h1>Force Of Habit is an experiment-driven independent game studio.</h1>
						</div> -->

						<!-- <div class='text'>
							<h1>Toast Time: Smash Up! out now for Nintendo Switch!</h1>
						</div>-->

						<!--
						<div class='text'>
							<h1 style='margin-bottom:0'>Neon Caves is coming to Nintendo Switch on March 27th!</h1>
							<h4 style='margin-top:10'>Pre-purchase for 25% off!</h4>
						</div>
					-->*/
