import * as SecureStore from 'expo-secure-store';
import { useReducer } from 'react';

import { AuthAction, AuthState } from '../types/authTypes';

function authReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      SecureStore.setItemAsync('userToken', action.token); // await??
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      SecureStore.deleteItemAsync('userToken'); // await??
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
  }
}

const authInitialState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const _useAuthReducer = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

  return [authState, dispatchAuth] as const;
};
