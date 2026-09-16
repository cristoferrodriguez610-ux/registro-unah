import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const USERS = {
  '20241002333': {
    account: '20241002333',
    name: 'KAROL ELISSA MOLINA MARTINEZ',
    career: 'INGENIERIA ELECTRICA INDUSTRIAL',
    campus: 'CIUDAD UNIVERSITARIA',
    email: 'karol.molina@unah.hn',
    photo: '/karol.png',
    globalIndex: 73,
    periodIndex: 70,
    admissionIndex: 924
  },
  '20211000375': {
    account: '20211000375',
    name: 'ALICIA MARÍA PÉREZ',
    career: 'INGENIERÍA EN SISTEMAS',
    campus: 'UNAH-TEC DANLÍ',
    email: 'alicia.perez@unah.hn',
    photo: '/luz.jpg',
    globalIndex: 85,
    periodIndex: 82,
    admissionIndex: 1050
  }
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (account, password) => {
    // In a real app we'd check password too. Here we only check the account number.
    const user = USERS[account];
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
