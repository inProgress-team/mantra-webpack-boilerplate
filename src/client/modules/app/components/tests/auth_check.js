import React from 'react';
const {describe, it} = global;
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AuthCheck from '../auth_check';

import Navbar from 'react-bootstrap/lib/Navbar';

describe('app.components.auth_check', function() {

  const defaultContext = { FlowRouter: { go: ()=>{} } };

  it('should render null if logging', function() {
    const el = shallow(<AuthCheck loggingIn={true} />);
    expect(el.type()).to.equal(null);
  });

  it('should render null if there is no user', function() {
    const el = shallow(<AuthCheck user={null} {...defaultContext} />);
    expect(el.type()).to.equal(null);
  });

  it('should call go|login from FlowRouter if there is no user', function() {
    const FlowRouter = { go: sinon.spy() };
    const el = shallow(<AuthCheck user={null} FlowRouter={FlowRouter} />);
    expect(FlowRouter.go.calledOnce).to.equal(true);
    expect(FlowRouter.go.calledWith('/login')).to.equal(true);
  });


  it('should work without passing a content function', function() {
    const el = shallow(<AuthCheck user={{}} />);
    expect(true).to.equal(true);
  });

  it('should render the content returns by content function if there is a user', function() {
    const content = <mytag id="mycontent" />;

    const el = shallow(<AuthCheck user={{}} content={()=>content} />);
    expect(el.contains(content)).to.equal(true);
  });

  it('should render a navbar if there is a user', function() {
    const el = shallow(<AuthCheck user={{}} />);
    expect(el.find(Navbar)).to.have.length(1);
  });

});
