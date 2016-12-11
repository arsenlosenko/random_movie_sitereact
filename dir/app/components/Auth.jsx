import React from 'react';

export default class Auth extends React.Component{
	render(){
		return(
			<div id="authForm" className="text-left col-md-2">
			<form>
			Login:
			<br/>
			<input type="text" value="name"/>
			<br/>
			Password:
			<br/>
			<input type="password" value="pass"/>
			<br/>
			<input type="submit" value="Login"/>
			</form>
			</div>
			);
	}
}