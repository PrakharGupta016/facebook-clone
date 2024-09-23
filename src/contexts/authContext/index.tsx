import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

type AuthContextProps = {
  user: User | null;
  userLoggedIn: boolean;
  loading: boolean;
};

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  userLoggedIn: false,
  loading: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const initializeUser = (user1: User | null) => {
    if (user1) {
      setUser({ ...user1 });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

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
