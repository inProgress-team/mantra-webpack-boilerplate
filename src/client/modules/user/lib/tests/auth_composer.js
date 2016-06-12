const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../auth_composer';

describe('app.lib.auth_composer', () => {


  describe('composer', () => {

    const getMeteor = () => {
      const Meteor = {
        loggingIn: stub(),
        user: stub()
      };
      return Meteor;
    };

    it('should call onData with data', done => {
      const Meteor = getMeteor();
      const context = () => ({Meteor});
      const onData = (err, data) => {
        expect(Meteor.loggingIn.calledOnce).to.be.equal(true);
        expect(Meteor.user.calledOnce).to.be.equal(true);
        expect(data).to.be.deep.equal({
          loggingIn: undefined,
          user: undefined
        });
        done();
      }

      composer({context}, onData);

    });

    /*

    const Tracker = {nonreactive: cb => cb()};
    const getCollections = (post) => {
      const Collections = {
        Posts: {findOne: stub()}
      };
      Collections.Posts.findOne.returns(post);
      return Collections;
    };

    describe('before subscription ready', () => {
      describe('with latency componsation', () => {

      });

      describe('with no latency componsation', () => {
        it('should call onData without nothing', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Collections = getCollections();

          const context = () => ({Meteor, Tracker, Collections});
          const postId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.equal(undefined);
            done();
          };

          composer({context, postId}, onData);
        });
      });
    });

    describe('after subscription is ready', () => {
      it('should call onData with data', done => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});
        const post = {aa: 10};
        const Collections = getCollections(post);

        const context = () => ({Meteor, Tracker, Collections});
        const postId = 'dwd';
        const onData = (err, data) => {
          expect(data).to.be.deep.equal({post});
          done();
        };

        composer({context, postId}, onData);
      });
    });
    */
  });



  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map logout', () => {
        const actions = {account: {logout: spy()}};

        const deps = depsMapper({}, actions);

        expect(deps.logout).to.be.equal(actions.account.logout);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {account: {logout: spy()}};
        const context = spy();

        const deps = depsMapper(context, actions);

        expect(deps.context()).to.be.equal(context);
      });

      it('should map FlowRouter', () => {
        const actions = {account: {logout: spy()}};
        const context = { FlowRouter: spy() };

        const deps = depsMapper(context, actions);

        expect(deps.FlowRouter).to.be.equal(context.FlowRouter);
      });
    });
  });
});