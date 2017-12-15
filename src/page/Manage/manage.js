import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import Receiver from '../../Component/Receiver/receiver';

import 'semantic-ui-css/semantic.min.css';
import './manage.css';
import { Button, Label, Card, Image, Checkbox, Icon, Table, Menu, Tab, Input, Image as ImageComponent, Item, Header} from 'semantic-ui-react'
import { getalluser , deleteuser } from '../../Api'


const colors = ['red']

class Manage extends Component {

  constructor() {
    super();
    this.state = {
        search: '',
        i: 1,
        user: []
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    
    deleteuser(e.target.value)
    .then(data => {
      if (data.status === 200) {
        this.componentDidMount()
      }
    })
  }

  componentDidMount() {
    getalluser().then((user) => this.setState({ user }))
  }

  render() {

    const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />
    
    const panes = [
      {
        menuItem: { key: 'users', icon: 'users', content: 'User' },
        render: () => <Tab.Pane>
          {colors.map(color => (
          <Table color={color} key={color} celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center' ><Icon name='user' />Name</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' ><Icon name='phone' />Phone</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' ><Icon name='mail' />E-mail</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'><Icon name='user close' /> User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>

            {this.state.user.length >= 0 ?
                    this.state.user.map(list =>

              <Table.Row>
                <Table.Cell width='5'>{list.firstName} {list.lastName}</Table.Cell>
                <Table.Cell width='4'>{list.phone}</Table.Cell>
                <Table.Cell width='5'>{list.email}</Table.Cell>
                <Table.Cell negative width='2' textAlign='center'>
                  <Button  icon negative size='tiny' value={list.username} onClick={this.onSubmit}>
                  <Icon name='close' /></Button>
                </Table.Cell>
              </Table.Row>

            ) : null
            }
    
              
            </Table.Body>
          </Table>
        ))}
    
        </Tab.Pane>,
      },
      {
        menuItem: { key: 'manage', icon: 'configure', content: 'Manage' },
        render: () => <Tab.Pane>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Delete User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='user' /> Delete User
                </Button>
                </Table.Cell>
              </Table.Row>
    
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='user' /> Delete User
                </Button>
                </Table.Cell>
              </Table.Row>
    
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>
                <Button floated='right' icon labelPosition='left' primary size='small'  >
                  <Icon name='user' /> Delete User
                </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
    
    
          </Table>
    
        </Tab.Pane>,
      },
    ]

    return (
      <div className="Manage">
        <Navbar />
        <br />

        <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            MANAGEMENT
          </Header.Content>
        </Header>
      </div>

        <div class="postn">
          <Tab panes={panes} />
        </div >
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Manage;