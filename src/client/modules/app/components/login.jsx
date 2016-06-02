import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Input from 'formsy-react-components/release/input';
import Form from 'formsy-react-components/release/form';

export default class Login extends Component {
  render() {
    const { login, error } = this.props;
    console.log(error);
    return (
      <div>
        <Form layout="vertical" onValidSubmit={login} noValidate>
          <Input name="email" type="email" label="Votre email" required validations="isEmail" validationError="N'est pas un email." />
          <Input name="password" type="password" label="Votre mot de passe" required />

          <Button bsStyle="primary" type="submit" block>Se connecter</Button>
        </Form>
      </div>
    );
  }
}
