import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          Name: '',
          UserN : '',
          Email: ''
        };
        
this.Input_renew = this.Input_renew.bind(this);
this.Submission = this.Submission.bind(this);
      }
 Input_renew = (event) =>{
const X = event.target.name
this.setState({[X]:event.target.value})
 }
  Submission(){
    var tuple = { name:this.state.Name , username: this.state.UserN , email: this.state.Email };

    axios.post('https://jsonplaceholder.typicode.com/users', tuple)
    .then(response => {
      console.log(response)
      this.setState({isLoaded:true,
                      flag:1,
                    })
    })
    .catch(error => {
      alert(error);
      console.log(error);
    })
    }

  render() {

    const { error, isLoaded,Name,UserN,Email } = this.state;

      return(
      <div>


<form>
  <label>
    Name:
    <input type="text" name="Name"  onChange={this.Input_renew} />
  </label>

  <label>
    User Name:
    <input type="text" name="UserN"  onChange={this.Input_renew} />
  </label>

  <label>
    Email
    <input type="text" name="Email"  onChange={this.Input_renew} />
  </label>

</form>

  
      <button onClick={this.Submission}>
      SUBMIT
      </button>

      </div>
      );
 

    
  }

  componentDidMount() {

    }
}

export default App;
