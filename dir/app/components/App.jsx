import React from 'react';
import Footer from 'components/Footer';
import Buttons from 'components/Buttons';
//import Script from 'components/Script';
import * as movies from 'components/movies';



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
      <Buttons />
      <Footer />
      </div>
      </div>
    );
  }
}
