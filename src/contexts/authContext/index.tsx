import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import {auth} from "../../firebase";
import { onAuthStateChanged,User } from "firebase/auth";

type AuthContextProps = {
  user: User|null;
  userLoggedIn: boolean;
  loading: boolean;
};

const AuthContext = React.createContext<AuthContextProps>(
  {user: null,
  userLoggedIn: false,
  loading: true,}
);

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return ()=>unsubscribe();
  },[]);
  const initializeUser = (user: User|null) => {
    console.log('state changed')
    if (user) {
      setUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };
  const value = {
    user,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
