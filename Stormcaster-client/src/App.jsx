import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import UserModel from './models/user';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
  const [query, setQuery] = useState('');

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId });
    localStorage.setItem('id', userId);
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');

    // eslint-disable-next-line no-unused-vars
    UserModel.logout().then(res => {
      setCurrentUser(null)
      
    });
  }

  const formatQuery = (q) => {
    const newQuery = q.replace(/\s/g, '+');
    setQuery(newQuery);
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} logout={logout} formatQuery={formatQuery} />
      <Routes currentUser={currentUser} storeUser={storeUser} query={query} />
      <Footer />
    </div>
  );
}

export default App 
