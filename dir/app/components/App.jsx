import React from 'react';
import Script from 'components/Script';

export default class App extends React.Component {
	constructor(){
		super();

}
  render() {
    return (
    	<div>
      <div id="content">
      <h1>MovieRandomizer: choose movie from your favorite genre!</h1>
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
      <Script />
      <Buttons />
      <div>{movieShow()}</div>
      <Footer />
      </div>
      </div>
    );
  }
}


class Buttons extends React.Component{
	render(){
		return(
			<div>
				<button type="button"  id="left" className="btn-lg">&#8592;</button>;
				<button type="button"  id="right" className="btn-lg">&#8594;</button>;
			</div>
			);
				}
};


class Footer extends React.Component{
	render(){
		return(
			<h4 id="footer">Footer</h4>	
			);

	}
}

const movies = {
  id_1: {
    'genre': 'drama',
    'title': 'Shawshank Redemprion',
    'year': '1994',
    'budget': '2.5M',
    'img': 'https://goo.gl\/Dpyuth',
  },
  id_2: {
    'genre': 'crime',
    'title': 'The Godfather',
    'year': '1972',
    'budget': '1.5M',
    'img': 'https://goo.gl\/Xulesy',
  },
  id_3: {
    'genre': 'action',
    'title': 'The Dark Knight',
    'year': '2008',
    'budget': '200M',
    'img': 'https://goo.gl\/p6O2pv',
  },
  id: '',
  genre: '',
  title: '',
  year: '',
  budget: '',
  img: '',

  id: '',
  genre: '',
  title: '',
  year: '',
  budget: '',
  img: '',

}
function movieShow(){

	return(
	<div id='movie'>
		<h1>{movies.id_1.title}</h1>
		<p>Genre: {movies.id_1.genre}</p>
		<p>Year: {movies.id_1.year}</p>
		<p>Budget: {movies.id_1.budget}</p>
		<img src={movies.id_1.img}/>
	</div>
	);

}