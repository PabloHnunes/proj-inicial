import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Configuracao from './pages/Configuracao';
import Sobre from './pages/Sobre';

export default () => {

    return (
        <Switch>
            
            <Route exact path="/">
                <Home />
            </Route>

            <Route  exact path="/config">
                <Configuracao />
            </Route>

            <Route  exact path="/sobre">
                <Sobre />
            </Route>

        </Switch>
    );
}