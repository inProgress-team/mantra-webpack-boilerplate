export default {
  login({ Meteor, LocalState }, { email, password }) {

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/account');
    });
  }
}
