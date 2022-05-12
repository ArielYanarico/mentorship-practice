import React from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  

  async login ( event ) {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:4000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    console.log('RESPONSE ', response)
  }

  handleUsernameChange (event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  render() {
    
    return (
      <div className='Login'>
        <form onSubmit={this.login}>
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
      </div>
    )
  }
}

export default Login;