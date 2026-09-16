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
    career: 'INGENIERÍA CIVIL',
    campus: 'CIUDAD UNIVERSITARIA',
    email: 'alicia.perez@unah.hn',
    photo: '/luz.jpg',
    globalIndex: 85,
    periodIndex: 82,
    admissionIndex: 1050
  }
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = sessionStorage.getItem('unah_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (account, password) => {
    const user = USERS[account];
    if (user) {
      setCurrentUser(user);
      sessionStorage.setItem('unah_user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('unah_user');
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
