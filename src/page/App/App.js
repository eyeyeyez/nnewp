import React, { Component } from 'react';

import './App.css';
import { Image, Button, Icon } from 'semantic-ui-react'

import Background from '../../styles/mood1430x633.jpg';

const sectionStyle = {
  width: "80%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")",
 

};

class App extends Component {

  render() {
    return (

      <div style={sectionStyle}>
        <img src={Background} />
        <div class='mid' >
          <a href='/news' >

            <Button size='massive' color='black' >
              ENTER SITE
                <Icon name='right arrow' />
            </Button>
          </a>
        </div>

      </div>
    );
  }
}



export default App;