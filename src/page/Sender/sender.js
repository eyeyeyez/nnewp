import React, { Component } from 'react'
import '../../styles/semantic.min.css'
import { Button, Header, Image, Form,Modal } from 'semantic-ui-react'
import { publishPosts } from '../../Api'


import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import './sender.css';

class Sender extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      category: '',
      contact: '',
      img : 'https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/t/539a8b01e4b07a1d748dce69/1402637057762/The-Ninth-Day-on-blank-book-cover-bigger.png?format=500w'
    };
    this.onChange = this.onChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {

    this.setState({ category: e.target.value + ',' + this.state.category })
    console.log(e.target.value + ',' + this.state.category);

  }

  onTextChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
    console.log(value);
    
  }

  onSubmit(e) {

    publishPosts(this.state.title, this.state.content, this.state.category, this.state.contact, this.state.img)
      .then(data => {
        if (data.status === 200) {
          this.props.history.replace('/news')
        }
      })

  }
  state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
   
  render() {
    const { open, size } = this.state
    return (
      <div className="sender">
        <Navbar />
        <div class="rebody">
          <br />
          <Header>I need<i aria-hidden="true" class="book icon"></i> </Header>
          <Form>
            <div class="ui vertically divided grid">
              <div class="two column row">
                <div class="thirteen wide column">
                  <Form.Input placeholder='Title' name='title' onChange={this.onTextChange} />
                </div>
                <div class="three wide column">
                  <div class="ui icon labeled vertical buttons">
                    <Button negative onClick={this.show('mini')}>
                      <i aria-hidden="true" class="upload icon"></i>Upload</Button>
                    <Modal size={size} open={open} onClose={this.close}>
                      <Modal.Header>
                        <p>Import Book's Image</p>
                      </Modal.Header>
                      <Modal.Content>
                        <input size='large' name='img' onChange={this.onTextChange} />
                      </Modal.Content>
                      {/* <Modal.Actions>
                      <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                      </Modal.Actions> */}
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <Form.Group  grouped>
             <b>Category</b><br/>
              <div class="ui vertically divided grid">
                <div class="three column row">
                  <div class="column">
                    <Form.Field label='Generalities' value='Generalities' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Philosophy' value='Philosophy' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Religion' value='Religion' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Social sciences' value='Social sciences' control='input' type='checkbox' onChange={this.onChange} />
                  </div>
                  <div class="column">
                    <Form.Field label='Language' value='Language' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Science' value='Science' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Technology' value='Technology' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Arts and recreation' value='Arts and recreation' control='input' type='checkbox' onChange={this.onChange} />
                  </div>
                  <div class="column">
                    <Form.Field label='Literature' value='Literature' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='History and geography' value='History and geography' control='input' type='checkbox' onChange={this.onChange} />
                    <Form.Field label='Others' value='Others' control='input' type='checkbox' onChange={this.onChange} />
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Field label='Description' control='textarea' rows='6' name='content' onChange={this.onTextChange} />
            <Form.Input label='Contact'placeholder='e-mail or phone' name='contact' onChange={this.onTextChange} />
          </Form>
          <br />
          <Button floated='right' negative class="buttonre" positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.onSubmit} />
          <br /> <br /> <br />
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Sender;
