import React, { Component } from 'react';

class GameDescription extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return this.props.data.map((item, index)=>{
			const key = "item" + index;
			const markup = {__html:item.text};
			if (item.type == "h") {
				return (<h1 key={key} className='prehead spaced' dangerouslySetInnerHTML={markup}></h1>);
			}
			else if (item.type == "p") {
				return (<p key={key} className='game' dangerouslySetInnerHTML={markup}></p>);
			}
			else if (item.type == "i") {
				return (<p key={key} className='game italic' dangerouslySetInnerHTML={markup}></p>);
			}
			else if (item.type == "features") {
				item.type = "list";
				item.name = "Features";
				item.list = this.props.game.features;
			}
			if (item.type == "list") {
				const li = item.list.map((listItem,itemIndex)=>{
					return (<li key={itemIndex}>{listItem}</li>);
				});
				return (<div key={key}>
							<h2 className='pretitle'>{item.name}</h2>
							<ul className='myul'>
								{li}
							</ul>
						</div>);

			}
			return null;
		});
	}
};

export default GameDescription
