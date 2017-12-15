import React from 'react';

import './login.css';

import { login } from '../../Api'
import { Grid, Button,Message ,Icon} from 'semantic-ui-react'


class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onTextChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem('username', this.state.username)
          this.props.history.replace('/news')
        }
      })
  }
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>

          <Grid.Column  width={5}>
          </Grid.Column>

          <Grid.Column  width={6}>
            <div class="blog">
            <div>
              <h2 class="ui icon center aligned header">
                <Icon aria-hidden="true" name="user circular "></Icon>
                <div class="content">SIGN IN</div>
              </h2>
            </div>
            <br />

            <form className='ui large form' onSubmit={this.onSubmit}>
              <div className='ui stacked segment'>
                <div className='field'>
                  <div className='ui left icon input'>
                    <i className='user icon' />
                    <input
                      type='text'
                      name='username'
                      placeholder='Username'
                      value={this.state.username}
                      onChange={this.onTextChange} />
                  </div>
                </div>

                <div className='field'>
                  <div className='ui left icon input'>
                    <i className='lock icon' />
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={this.onTextChange} />
                  </div>
                </div>

                <div className='field'>
                  <div className='ui left icon input'>
                    <Button negative type='submit' className='ui  fluid button'>
                      Sign In
                  </Button>
                  </div>
                </div>
              </div>
            </form>
              <Message>
               <p> New to us?    <a href='/register'>Sign Up</a></p>
              </Message>    
          </div>
          </Grid.Column>

          <Grid.Column  width={5}>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
