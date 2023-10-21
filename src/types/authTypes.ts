export type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type AuthAction =
  | { type: 'RESTORE_TOKEN'; token: string | null }
  | { type: 'SIGN_IN'; token: string }
  | { type: 'SIGN_OUT' };

export type AuthContextType = {
  dispatchAuth: (action: AuthAction) => void;
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
};
