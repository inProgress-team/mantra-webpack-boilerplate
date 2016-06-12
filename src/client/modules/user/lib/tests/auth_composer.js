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

    it('should call onData with data and no error', done => {
      const Meteor = getMeteor();
      const context = () => ({Meteor});
      const onData = (err, data) => {
        expect(err).to.be.equal(null);
        expect(Meteor.loggingIn.calledOnce).to.be.equal(true);
        expect(Meteor.user.calledOnce).to.be.equal(true);
        expect(data).to.be.deep.equal({
          loggingIn: undefined,
          user: undefined
        });
        done();
      };

      composer({context}, onData);

    });
  });


});
