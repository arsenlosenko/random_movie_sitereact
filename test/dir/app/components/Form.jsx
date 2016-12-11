import React from 'react';


export default class Form extends React.Component{

	render(){
		return (
			<div>
			<p>Choose your movie</p>
      		<form name="submitMovie">
      <select name="movies">
        	<option value="sci-fi">Sci-Fi</option>
        	<option value="comedy">Comedy</option>
        	<option value="action">Action</option>
        	<option value="drama">Drama</option>
        	<option value="history">History</option>
      </select>
      <input type="submit" value="Random film" className="btn-primary" />
      		</form>
      		</div>
			);
	}
}