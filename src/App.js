import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import NavItens from './Components/NavItens';
import DropDrownMenu from './Components/DropDownMenu';

import Login from './pages/Login';

import Routes from './Routers';

import { GlobalStyle } from './Components/GlobalStyle';
import { ReactComponent as Arrow } from './assets/icons/arrow-2.svg';
import { ReactComponent as Buger } from './assets/icons/hamburger-1.svg';
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

  // if( user === null ){
  //     return(
  //       <Login onReceiveGoogle={actionLoginDataGoogle}/>
  //     );
  // }

  return(
    <BrowserRouter>
      <GlobalStyle />
      {/* <Header /> */}
      <NavBar>
        <NavItens icon={<Arrow />} />
        <NavItens icon={<Buger />} >
          <DropDrownMenu/>
        </NavItens>
      </NavBar>
      <Routes/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;