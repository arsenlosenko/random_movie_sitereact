import React from 'react';
import Form from 'components/Form.jsx';
import Deploy from 'components/Deploy';
import Buttons from 'components/Buttons.jsx';
import Comments from 'components/Comments';
import Auth from 'components/Auth.jsx';

export default class App extends React.Component{

	render(){
		return(
			<div className="container-fluid text-center">
			<div className="row">
			<Auth/>
			<div className="col-md-10">
			<h1 className="text-center">Movie Catalog</h1>
			<Form />
			</div>
			</div>
			<Buttons />
			<Comments />
			</div>
			);
			
	}
}