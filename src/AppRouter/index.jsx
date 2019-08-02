import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../views/Homepage';
import Navbar from '../components/common/navbar';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
