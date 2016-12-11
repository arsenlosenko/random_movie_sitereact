import React from 'react';

export default class Buttons extends React.Component{
	render(){
		return(
			<div>
			<button id="left" className="btn btn-primary">&#8592;</button>
			<button id="right" className="btn btn-primary">&#8594;</button>
			</div>
			);
	}
}