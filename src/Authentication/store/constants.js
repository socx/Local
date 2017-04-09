import { createConstants } from 'main/components/Utils';

export default createConstants(  
    'SET_AUTH_TOKEN',
    'CLEAR_AUTH_TOKEN',

    'LOGIN_ATTEMPT',
    'LOGIN_SUCCESSFUL',
    'LOGIN_FAILED',
    'USERNAME_CHANGED',
    'PASSWORD_CHANGED'
);
