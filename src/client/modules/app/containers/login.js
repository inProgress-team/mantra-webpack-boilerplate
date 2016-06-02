import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  onData(null, {error: LocalState.get('LOGIN_ERROR')});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  login: actions.account.login
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
