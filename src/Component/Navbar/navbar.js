import React, { Component } from 'react';
import { Menu, Image,Button , Segment,Icon} from 'semantic-ui-react'

import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    state = { activeItem: 'news' }
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    
      signout = event => {
        localStorage.clear();
        console.log(this.props);
       window.location.reload()
      }

    render() {
        return (
            <div class='bar'>
            <Menu  >
                <Menu.Item href="/news" name='news'  onClick={this.handleItemClick}><Icon name='newspaper' />NEWS</Menu.Item>
                <Menu.Item href='/receiver' name='receiver' onClick={this.handleItemClick} ><Icon name='empty heart' />NEED</Menu.Item>
                <Menu.Item href='/sender' name='sender' onClick={this.handleItemClick} ><Icon name='heart' />GIVE</Menu.Item>
                
                {!localStorage.getItem('username') ? (<Menu.Menu position='right'>
                    <Menu.Item href='/register' name='sign up'  onClick={this.handleItemClick} />
                    <Menu.Item href='/login' name='Sign In '  onClick={this.handleItemClick}><Button color='red'>Sign In</Button></Menu.Item>
                </Menu.Menu>
                ) : (<Menu.Menu position='right'>
                    {localStorage.getItem('username') == 'admin' ?
                    (<Menu.Item href='/manage' name='manage' onClick={this.handleItemClick} ><Icon name='configure' />MANAGE</Menu.Item>):null}
                    <Menu.Item active  ><Icon name='user' />{localStorage.getItem('username')}</Menu.Item>
                    <Menu.Item name='Sign out' onClick={this.signout} > <Button color='red'>Sign Out</Button></Menu.Item>
                    </Menu.Menu>
                    )}
            </Menu></div>
        )
    }
}

export default Navbar;