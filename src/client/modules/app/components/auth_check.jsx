import React, { Component } from 'react';

import { authComposer } from 'client/configs/composers.js';

class AuthCheck extends Component {
  render() {
    const { content, loggingIn, user } = this.props;

    if(loggingIn) return null;

    if(!user) {
      console.log('plouf');
      setTimeout(()=>{
        FlowRouter.go('/login')
      });
      return null;
    }

    return (
      <div>
        AuthCheck

        {content()}
      </div>
    );
  }
}

export default authComposer(AuthCheck)
