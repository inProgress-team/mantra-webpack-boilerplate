const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../account';

describe('app.actions.account', () => {



  describe('login', () => {


    it('should reset LOGIN_ERROR at first', () => {
      const LocalState = {set: spy()};
      const Meteor = {loginWithPassword: spy()};

      actions.login({LocalState, Meteor}, {});

      expect(LocalState.set.calledWith('LOGIN_ERROR', null)).to.equal(true);
    });

    it('should call loginWithPassword with email and password', () => {
      const email = 'contact@in-progress.io';
      const password = 'mypassword';

      const LocalState = {set: spy()};
      const Meteor = {loginWithPassword: spy()};

      actions.login({LocalState, Meteor}, {email, password});

      expect(Meteor.loginWithPassword.calledWith(email, password)).to.equal(true);
    });

    it('should set LOGIN_ERROR if there is an error', () => {

      const reason = 'Error man';

      const LocalState = {set: spy()};
      const Meteor = {loginWithPassword: stub()};

      Meteor.loginWithPassword.callsArgWith(2, {reason});

      actions.login({LocalState, Meteor}, {});

      expect(LocalState.set.calledTwice).to.equal(true);

      const args = LocalState.set.args;

      expect(args[0]).to.deep.equal([ 'LOGIN_ERROR', null ]);
      expect(args[1]).to.deep.equal([ 'LOGIN_ERROR', reason ]);

    });

    it('should not set LOGIN_ERROR if there is no error', () => {

      const LocalState = {set: spy()};
      const Meteor = {loginWithPassword: stub()};

      Meteor.loginWithPassword.callsArgWith(2);

      actions.login({LocalState, Meteor}, {});

      expect(LocalState.set.calledOnce).to.equal(true);

      const args = LocalState.set.args;

      expect(args[0]).to.deep.equal([ 'LOGIN_ERROR', null ]);

    });

  });

  describe('logout', () => {

    it('should call Meteor.logout', () => {
      const Meteor = {logout: spy()};
      actions.logout({Meteor});

      expect(Meteor.logout.calledOnce).to.equal(true);
    });
  });


  describe('clearErrors', () => {
    it('should clear LOGIN_ERROR local state', () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState});
      expect(LocalState.set.calledOnce).to.be.equal(true);
      expect(LocalState.set.calledWith('LOGIN_ERROR', null)).to.be.equal(true);
    });
  });


});
