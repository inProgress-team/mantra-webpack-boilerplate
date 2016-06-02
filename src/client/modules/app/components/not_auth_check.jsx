import React, { Component } from 'react';

import { authComposer } from 'client/configs/composers.js';

class NotAuthCheck extends Component {
  render() {
    const { content, loggingIn, user } = this.props;

    if(loggingIn) return null;

    if(user) {
      setTimeout(()=>{
        FlowRouter.go('/')
      });
      return null;
    }

    return (
      <div>
        NotAuthCheck
        {content()}
      </div>
    );
  }
}

export default authComposer(NotAuthCheck)
