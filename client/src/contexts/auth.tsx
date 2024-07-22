"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { LOCAL_STORAGE_USER } from "@/utils/constants";

import {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from "@/utils/localStorage";

import { Player } from "@/interfaces/player";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextData {
  signed: boolean;
  user: Player | null;
  signIn: (user: Player) => void;
  signOut: () => void;
}

const userFromStorage = getStorageItem<Player>(LOCAL_STORAGE_USER);

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Player | null>(null);

  useEffect(() => {
    setUser(userFromStorage || null);
  }, []);

  const signIn = useCallback((player: Player) => {
    setStorageItem(LOCAL_STORAGE_USER, player);
    setUser(player);
  }, []);

  const signOut = useCallback(() => {
    removeStorageItem(LOCAL_STORAGE_USER);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: Boolean(user),
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

export { AuthProvider, useAuth };
