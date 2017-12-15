import React, { Component } from 'react';

import './footer.css';
import { Label, Icon} from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      
      <div className="Footer">
        <h5 class="ui icon centered aligned">
          <label >
              <Icon name='copyright'/> 2017 by Sharing Our Heart <Icon name='heart' color='red'/> 
            </label>
        </h5>
      </div>
    );
  }
}

export default Footer;