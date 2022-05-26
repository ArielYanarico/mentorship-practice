import React from 'react';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import TextInput from '../components/TextInput';
import withHistory from '../hocs/withHistory';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hiddenSpinner: true
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin ( event ) {
    event.preventDefault();

    this.setState({hiddenSpinner: false}, async () => {

      const response = await fetch('https://fast-crag-62434.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
  
      this.setState({hiddenSpinner: true});

      if (response.ok) {
        const responseBody = await response.body;
        localStorage.setItem('token', responseBody.token);
        this.props.navigate('/');
      }
      else{
        const responseMsg = await response.text();
        console.log(responseMsg);
        this.props.navigate('/error', {state: {errorCode: response.status, errorMsg: responseMsg}});
      }
    } );
  }

  handleUsernameChange (event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <>
        <form className='login' onSubmit={this.handleLogin}>
          <TextInput
            label='Username'
            onChange={this.handleUsernameChange}
            value={this.state.username}
          />
          <TextInput
            label='Password'
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <Button label='Login' buttonType='normal' type='submit' />
        </form>

        <Spinner hidden={this.state.hiddenSpinner}/>
      </>
    )
  }
}

export default withHistory(Login);