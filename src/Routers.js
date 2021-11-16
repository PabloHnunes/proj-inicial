import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Configuracao from './pages/Configuracao';
import Sobre from './pages/Sobre';
import Orcamento from './pages/Orcamentos';

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

            <Route exact path="/orcamento-produtos">
                <Orcamento/>
            </Route>

        </Switch>
    );
}