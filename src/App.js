import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

import Routes from './Routers';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (user) =>{
    let newUser = {
      id: user.uid,
      name: user.displayName,
      avatar: user.photoUrl
    }

    setUser(newUser);

  }

  if( user === null ){
      return(
        <Login onReceiveGoogle={actionLoginDataGoogle}/>
      );
  }

  return(
    <BrowserRouter>
      <Header />
        <Routes/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;