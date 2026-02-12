import { CANDIDATE_SAVED, USER_FORGOT_PASSWORD } from '@app/common/domain';

export default {
  [CANDIDATE_SAVED]: {
    subject: 'Email confirmation',
    templateName: 'email-confirmation',
  },
  [USER_FORGOT_PASSWORD]: {
    subject: 'Forgot Password',
    templateName: 'forgot-password',
  },
};
