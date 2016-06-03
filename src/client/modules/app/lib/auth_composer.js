import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {

  const {Meteor} = context();

  onData(null, {
    loggingIn: Meteor.loggingIn(),
    user: Meteor.user()
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  FlowRouter: context.FlowRouter,
  logout: actions.account.logout
});

export default component => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(component);
