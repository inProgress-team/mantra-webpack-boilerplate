import React from 'react';
import {mount} from 'react-mounter';

import {FlowRouter} from 'meteor/kadira:flow-router';

import Dashboard from 'client/modules/core/components/dashboard.jsx';

import { AuthCheck } from 'client/configs/components';

export default function (injectDeps) {
  const AuthCheckCtx = injectDeps(AuthCheck);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'dashboard',
    action() {
      mount(AuthCheckCtx, {
        content: () => (<Dashboard />)
      });
    }
  });

}
