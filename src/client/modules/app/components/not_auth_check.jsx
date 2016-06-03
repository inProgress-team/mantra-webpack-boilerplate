import React, { Component } from 'react';

export default class NotAuthCheck extends Component {
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

