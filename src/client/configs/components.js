import authComposer from 'client/modules/user/lib/auth_composer.js';

import AuthCheck from 'client/modules/user/components/auth_check.jsx';
import NotAuthCheck from 'client/modules/user/components/not_auth_check.jsx';

export default {
  AuthCheck: authComposer(AuthCheck),
  NotAuthCheck: authComposer(NotAuthCheck)
};
