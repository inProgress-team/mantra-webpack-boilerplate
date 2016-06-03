import authComposer from 'client/modules/app/lib/auth_composer.js';

import AuthCheck from 'client/modules/app/components/auth_check.jsx';
import NotAuthCheck from 'client/modules/app/components/not_auth_check.jsx';

export default {
  AuthCheck: authComposer(AuthCheck),
  NotAuthCheck: authComposer(NotAuthCheck)
};
