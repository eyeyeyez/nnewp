import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import Receiver from '../../Component/Receiver/receiver';

import 'semantic-ui-css/semantic.min.css';
import './news.css';
import { Label, Menu, Tab, Input, Button, Icon, Image as ImageComponent, Item, TextArea } from 'semantic-ui-react'

import { getall, apiupload, apisearch ,getalls ,apisearchs} from '../../Api'



class News extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      i: 1,
      post: [],
      send: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {

    this.setState({ search: e.target.value })
    console.log(this.state.search);

  }

  componentDidMount() {
    getall().then((post) => this.setState({ post }))
    getalls().then((send) => this.setState({ send }))
  }

  componentWillUpdate() {
    apisearch(this.state.search).then((post) => this.setState({ post }))
    apisearchs(this.state.search).then((send) => this.setState({ send }))
  }

  render() {

    const panes = [
      {
        menuItem: { key: 'users', icon: 'book', content: 'Books' },
        render: () => <Tab.Pane><Item.Group divided>


          {this.state.post.length >= 0 ?
            this.state.post.map(list =>

              <Item>
                <Item.Image src='https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/t/539a8b01e4b07a1d748dce69/1402637057762/The-Ninth-Day-on-blank-book-cover-bigger.png?format=500w' />

                <Item.Content>
                  <Item.Header as='a'>{list.title}</Item.Header>
                  <Item.Description><TextArea rows='5' cols='80' readonly='true'>{list.content}</TextArea></Item.Description>
                  <Item.Extra>
                    <Label>{list.category}</Label>
                  </Item.Extra>
                  <Item.Meta>
                    <span className='cinema'>{list.contact}</span>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ) : null
          }
        </Item.Group>
        </Tab.Pane>,
      },
      {
        menuItem: <Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>,
        render: () => <Tab.Pane><Item.Group divided>
        
        
                  {this.state.send.length >= 0 ?
                    this.state.send.map(list =>
        
                      <Item>
                        <Item.Image src='https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/t/539a8b01e4b07a1d748dce69/1402637057762/The-Ninth-Day-on-blank-book-cover-bigger.png?format=500w' />
        
                        <Item.Content>
                          <Item.Header as='a'>{list.title}</Item.Header>
                          <Item.Description><TextArea rows='5' cols='80' readonly='true'>{list.content}</TextArea></Item.Description>
                          <Item.Extra>
                            <Label>{list.category}</Label>
                          </Item.Extra>
                          <Item.Meta>
                            <span className='cinema'>{list.contact}</span>
                          </Item.Meta>
                        </Item.Content>
                      </Item>
                    ) : null
                  }
                </Item.Group>
                </Tab.Pane>,
      },
      {
        menuItem: <Menu.Menu >
          <Menu.Item>
            <Input type="text" icon={{ name: 'search', link: true }} placeholder='Search ...' onChange={this.onChange} />
          </Menu.Item></Menu.Menu >
      },
      {
        menuItem: <Menu.Menu position='right'>
          <Menu.Item>
            <Button.Group>
              <Button color='red' href="/receiver" content='Need' />
              <Button.Or />
              <Button href="/sender" content='Give' />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      },
    ]

    return (
      <div className="News">
        <Navbar />
        <br/>
        <div class="postn">
          <Tab panes={panes} />
        </div >
        <br />
        <Footer />
      </div>
    );
  }
}

export default News;