import { FlowRouter } from 'meteor/kadira:flow-router';

import './client/index';

Meteor.startup(function() {
  FlowRouter.initialize();
});
