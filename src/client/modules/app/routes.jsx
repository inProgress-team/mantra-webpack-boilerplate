import React from 'react';
import {mount} from 'react-mounter';

import { NotAuthCheck } from 'client/configs/components';

import Login from './containers/login';

export default function (injectDeps, {FlowRouter}) {
  const NotAuthCheckCtx = injectDeps(NotAuthCheck);

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(NotAuthCheckCtx, {
        content: () => (<Login />)
      });
    }
  });
}
