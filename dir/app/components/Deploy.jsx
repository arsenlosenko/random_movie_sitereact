import React from 'react';
import Form from 'components/Form.jsx';
var movies = require('components/movies');

console.log(movies);

export default class Deploy extends React.Component{

	render(){
		return(
				<div>
					<h3>Title: {movies.adventure.title}</h3>
					<h4>Year: {movies.adventure.year}</h4>
					<img src={movies.adventure.src} height={300}/>
					<article>Summary:{movies.adventure.summary}</article>
				</div>

			);
	}
}