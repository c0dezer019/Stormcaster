import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import UserModel from './models/user';
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId });
    localStorage.setItem('id', userId);
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');

    UserModel.logout().then(res => {
      setCurrentUser(null)
      
    });
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} logout={logout}/>
      <Routes currentUser={currentUser} storeUser={storeUser} />
      <Footer />
    </div>
  );
}

export default App 
