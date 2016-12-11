import React from 'react';
import Deploy from 'components/Deploy.jsx';


export default class Form extends React.Component{
 constructor() {
    super();
    this.state = {value: ''};
    this.props = {'id_1' : 'action',
    			  'id_2' : 'adventure',
    			  'id_3' : 'comedy',
    			  'id_4' : 'drama',
     			  'id_5' : 'history',
     			  'id_6' : 'sci-fi',
     			  'id_7' : 'crime'
     			};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A genre was submitted: ' + this.state.value);
    var chosedMovie = this.state.value;
    event.preventDefault();
    console.log(this.state.value);
    console.log(chosedMovie);
  }

  render() {
    return (
    	<div>
      <form onSubmit={this.handleSubmit}>
          <p>Please choose the genre of movie:</p>
          <br/>
          <select onChange={this.handleChange}>
            <option value={this.props.id_1}>Action</option>
            <option value={this.props.id_2}>Adventure</option>
            <option value={this.props.id_3}>Comedy</option>
            <option value={this.props.id_4}>Drama</option>
            <option value={this.props.id_5}>History</option>
            <option value={this.props.id_6}>Sci-fi</option>
            <option value={this.props.id_7}>Crime</option>
          </select> 	 	
        <br/>
        <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
      <Deploy />
      </div>
    );
  }
}	



































