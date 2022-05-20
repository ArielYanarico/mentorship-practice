import React from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import withHistory from '../hocs/withHistory';

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
    const response = await fetch('https://fast-crag-62434.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    console.log('RESPONSE ', response)
    const responseBody = await response.body;
    localStorage.setItem('token', responseBody.token);
    this.props.navigate('/');
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

export default withHistory(Login);