import React from 'react';
const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AuthCheck from '../auth_check';

import Navbar from 'react-bootstrap/lib/Navbar'

describe('app.components.auth_check', () => {

  it('should render null if logging', () => {
    const el = shallow(<AuthCheck loggingIn={true}/>);
    expect(el.type()).to.equal(null);
  });

  it('should render null if there is no user', () => {
    const el = shallow(<AuthCheck user={null}/>);
    expect(el.type()).to.equal(null);
  });



  it('should work without passing a content function', () => {
    const el = shallow(<AuthCheck user={{}} />);
    expect(true).to.equal(true);
  });

  it('should render the content returns by content function if there is a user', () => {
    const content = <mytag id="mycontent" />;

    const el = shallow(<AuthCheck user={{}} content={()=>content} />);
    expect(el.contains(content)).to.equal(true);
  });

  it('should render a navbar if there is a user', () => {
    const el = shallow(<AuthCheck user={{}} />);
    expect(el.find(Navbar)).to.have.length(1);
  });

});
