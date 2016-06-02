import React, { Component } from 'react';

import { authComposer } from 'client/configs/composers.js';

class NotAuthCheck extends Component {
  render() {
    const { content, user, context } = this.props;
    const FlowRouter = context().FlowRouter;

    if (user) {
      setTimeout(() => {
        FlowRouter.go('/');
      });
      return null;
    }

    return (
      <div>
        <h1>Not auth check</h1>
        {content()}
      </div>
    );
  }
}

export default authComposer(NotAuthCheck);
