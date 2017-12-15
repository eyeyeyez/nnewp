import _ from 'lodash'
import React, { Component } from 'react'
import '../../styles/semantic.min.css'
import { Popup, Button, Header, Image, Modal, Form } from 'semantic-ui-react'

class Receivers extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    
    return (
      <div>
        <Button onClick={this.show(true)}>Receiver</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Post</Modal.Header>
          <Modal.Content image >
            <Modal.Description>
              <Header>I need<i aria-hidden="true" class="book icon"></i> </Header>
              <Form>
                <div class="ui vertically divided grid">
                  <div class="two column row">
                    <div class="thirteen wide column">
                      <Form.Input placeholder='Title' />
                    </div>
                    <div class="three wide column">
                      <div class="ui icon labeled vertical buttons">
                        <button class="ui button" role="button">
                          <i aria-hidden="true" class="upload icon"></i>Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Form.Group grouped>

                  <Header>Category</Header>

                  <div class="ui vertically divided grid">
                    <div class="three column row">
                      <div class="column">
                        <Form.Field label='Generalities' control='input' type='checkbox' />
                        <Form.Field label='Philosophy' control='input' type='checkbox' />
                        <Form.Field label='Religion' control='input' type='checkbox' />
                        <Form.Field label='Social sciences' control='input' type='checkbox' />
                      </div>
                      <div class="column">
                        <Form.Field label='Language' control='input' type='checkbox' />
                        <Form.Field label='Science' control='input' type='checkbox' />
                        <Form.Field label='Technology' control='input' type='checkbox' />
                        <Form.Field label='Arts and recreation' control='input' type='checkbox' />
                      </div>
                      <div class="column">
                        <Form.Field label='Literature' control='input' type='checkbox' />
                        <Form.Field label='History and geography' control='input' type='checkbox' />
                        <Form.Field label='Other' control='input' type='checkbox' />
                      </div>
                    </div>
                  </div>
                </Form.Group>
                <Form.Field label='Body' control='textarea' rows='6' />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>Cancel</Button>
            <Button positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


export default Receivers;