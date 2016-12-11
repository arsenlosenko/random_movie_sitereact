import React from 'react';
import Script from 'components/Script';
import Form from 'components/Form';

export default class App extends React.Component {
	
  render() {
    return (
    
      <div id="content">
      <h1>MovieRandomizer: choose movie from your favorite genre!</h1>
	  <Form />  
      <Script />
      <Buttons />
      <div>{movieShow()}</div>
      <Footer />
      </div>
      
    );
  }
}


