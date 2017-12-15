import _ from 'lodash'
import React, { Component } from 'react';

import '../../styles/semantic.min.css'
import './register.css';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const ModalExampleScrollingContent = () => (
    <Modal trigger={<Button>Sign Up</Button>}>

        <Modal.Content scrolling>
           
                <div className="register">
                    <br />
                    <div class="ui grid">
                        <div class="four wide column">
                        </div>
                        <div class="eight wide column">
                            <div>
                                <h2 class="ui icon center aligned header">
                                    <i aria-hidden="true" class="users circular icon"></i>
                                    <div class="content">REGISTER</div>
                                </h2>
                            </div>
                            <form class="ui form">

                                <div class="field">
                                    <div class="required field">
                                        <label>Username</label>
                                        <div class="ui input">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="required field">

                                        <label>Password</label>
                                        <div class="ui input">
                                            <input type="text" placeholder="Password" />
                                        </div>
                                    </div>

                                </div>


                                <div class="field">
                                    <div class="required field">
                                        <label>First Name</label>
                                        <div class="ui input">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="required field">
                                        <label>Last Name</label>
                                        <div class="ui input">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>


                                <div class="field">
                                    <div class="required field">
                                        <label>Address</label>
                                        <div class="ui input">
                                            <input type="text" placeholder="Address" />
                                        </div>
                                    </div>
                                </div>

                                <div class="two fields">
                                    <div class="field">
                                        <div class="required field">
                                            <label>Email</label>
                                            <div class="ui input">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="required field">
                                            <label>Phone</label>
                                            <div class="ui input">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="field">
                                    <textarea readonly="">Welcome to the registration to Sharing Ours Heart website and its related services. You may access many areas of our website without registering your details with us. Certain areas are only open to you if you register. The terms and conditions which govern material submitted by you to us and your use of the www.telegraph.co.uk website (including all 'Telegraph' branded microsites and any email bulletins) are governed by our general "Terms and Conditions of Reading". These Terms and Conditions of Registration are in addition to the general Terms and Conditions of Reading.
1.
Registration
1.1
By registering here and creating your "Profile", you can access different services that are offered by us without having to register for each service separately. If a service you wish to subscribe to has additional terms and conditions, you will be asked to accept these separately.
1.2
You agree that:
(1)
you will keep your username and password safe, and won't share them with anyone.
(2)
you will not pass yourself off as someone else or create multiple, false accounts.
2.
Term
2.1
If you breach these or any of our other terms and conditions we reserve the right to close your account, if we do so, we may close all accounts you have open in your name.
2.2
To deactivate your account please contact our customer services department; their details can be found under "contact us" on your Telegraph.co.uk Profile page.
3.
Administration
3.1
You can update your personal details (including your account and marketing preferences) by accessing your account at your Telegraph.co.uk Profile page and making any necessary changes; this will update your details across all services that you have subscribed to.
4.
Data
4.1
Full details of the way in which we use cookies on our website and how we hold and process your information can be found in our Privacy and Cookie Policy
5.
General
5.1
No waiver by us of any breach of these terms shall constitute a waiver of any other prior or subsequent breach and we shall not be affected by any delay, failure or omission to enforce or express forbearance granted in respect of any of your obligations.
5.2
The rights and remedies of is under these terms are independent, cumulative and without prejudice to its rights under the law.
5.3
These terms are not intended to create and shall not create any rights, entitlements, claims or benefits enforceable by any third party by virtue of the Contracts (Rights of Third Parties) Act 1999.
5.4
These terms and/or your use of the website shall be governed by and construed in accordance with English law and the English Courts shall have exclusive jurisdiction over any dispute which may arise.

              </textarea>
                                </div>
                                <div class="field">
                                    <div class="ui checkbox">
                                        <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                                        <label>I agree to the Terms and Conditions</label>
                                    </div>
                                </div>
                                <button type="submit" class="ui button" role="button">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="four wide column">
                    </div>
                    <br />

                </div>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Submit <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ModalExampleScrollingContent
