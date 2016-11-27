import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import Buttons from 'components/Buttons';
import Footer from 'components/Footer';
import Script from 'components/Script';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Buttons />, document.querySelector('#buttons'));
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Footer />, document.querySelector('#footer'));
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Script />, document.querySelector('#script'));
});