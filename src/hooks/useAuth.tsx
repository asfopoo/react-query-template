import { useContext } from 'react';

import { AuthContext } from '../contextProviders/authProvider';

export const useAuth = () => {
  const { dispatchAuth, authState, signIn, signOut } = useContext(AuthContext);

  return {
    dispatchAuth,
    authState,
    signIn,
    signOut,
  };
};
