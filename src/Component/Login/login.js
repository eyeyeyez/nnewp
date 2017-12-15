import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'


import './login.css';

import { login } from '../../Api'

class ModalExampleSize extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Button onClick={this.show('tiny')}>Sign In</Button>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>
                        Login with Your Account
          </Modal.Header>
                    <Modal.Content>
                        <div
                            className='ui middle aligned center aligned grid'
                            style={{ padding: '50px 0 0 50px', width: '500px' }}>
                            <div className='column'>
                                <h2 className='ui teal header'>Login</h2>
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
                                                <button type='submit' className='ui teal fluid button'>
                                                    Log in
                  </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default ModalExampleSize
