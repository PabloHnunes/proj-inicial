import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavItens from './components/NavItens';
import DropDrownMenu from './components/DropDownMenu';

import Login from './pages/Login';

import { GlobalStyle } from './components/GlobalStyle';
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
      <NavBar>
        <NavItens icon={<Buger />} >
          <DropDrownMenu/>
        </NavItens>
      </NavBar>
      <SideBar/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;