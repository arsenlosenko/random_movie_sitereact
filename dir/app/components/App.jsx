import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
      <h1>MovieRandomizer: choose movie from your favorite genre!</h1>
      <p>Choose your movie</p>
      <select name="movies">
        <option value="sci-fi">Sci-Fi</option>
        <option value="comedy">Comedy</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="history">History</option>
      </select>
      </div>
    );
  }
}
