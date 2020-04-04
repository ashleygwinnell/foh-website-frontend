import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class PressKit_Factsheet extends React.Component {
	render() {
		if (!this.props.company) { return null; }

		return (<div>
					<h2 className='pretitle'>Factsheet</h2><br/>

					<h2 className='pretitle'>Developer:</h2>
					<p><Link to='/press'>{this.props.company.title}</Link><br/>
					Based in {this.props.company.basedIn}.</p><br/>

					<h2 className='pretitle'>Founding date:</h2>
					<p>{this.props.company.foundingDate}</p><br/>

					<h2 className='pretitle'>Website:</h2>
					<p><a href={this.props.company.website}>{this.props.company.website}</a></p><br/>

					<h2 className='pretitle'>Press / Business Contact:</h2>
					<p><a href={"mailto:" + this.props.company.pressContact }>{this.props.company.pressContact}</a></p><br/>

					<h2 className='pretitle'>Address:</h2>
					<p>
					{this.props.company.addressLines.map((address)=>{
						return (<React.Fragment key={address}>{address}<br/></React.Fragment>)
					})}
					</p><br/>

					<h2 className='pretitle'>Phone:</h2>
					<p>{this.props.company.phone}</p><br/>

					<h2 className='pretitle'>Social:</h2>
					<ul className='presskit'>
					{this.props.company.socials.map((social) => {
						return (<li key={social.link}><a href={social.link} target='new'>{social.name}</a></li>)
					})}
					</ul><br/>
				</div>);

	}
}

export default PressKit_Factsheet;

