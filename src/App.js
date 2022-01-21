import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './Components/SideBar';
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