import { createApplication } from 'graphql-modules';
import { user } from './modules/user';
import { session } from './modules/session';

export const application = createApplication({
  modules: [
      user,
      session
    ],
});