import React, { createContext, useState } from 'react';

export interface AuthContextData {
  loggedInUser: any | null;
  setLoggedInUser: (user: any | null) => void;
}

export const AuthContext = createContext<AuthContextData>({
  loggedInUser: null,
  setLoggedInUser: () => {},
});