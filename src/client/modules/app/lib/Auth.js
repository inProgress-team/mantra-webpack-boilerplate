import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

const _authComposer = ({context}, onData) => {

  const {Meteor} = context();

  onData(null, {
    loggingIn: Meteor.loggingIn(),
    user: Meteor.user()
  });
};

const _authDepsMapper = (context) => ({
  context: () => context
});

export default component => composeAll(
    composeWithTracker(_authComposer),
    useDeps(_authDepsMapper)
)(component);
