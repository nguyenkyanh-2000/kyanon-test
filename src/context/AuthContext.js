import { createContext, useState } from "react";

const initialState = {
  isAuthorized: false,
  user: null,
};

const AuthContext = createContext({ ...initialState });

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  let signin = (newUser, callback) => {
    setAuth({ isAuthorized: true, user: newUser });
    callback();
  };
  let signout = (callback) => {
    setAuth({ isAuthorized: false, user: null });
    callback();
  };
  let update = (updatedUser, callback) => {
    setAuth({ isAuthorized: true, user: updatedUser });
  };

  return (
    <AuthContext.Provider value={{ auth, signin, signout, update }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
