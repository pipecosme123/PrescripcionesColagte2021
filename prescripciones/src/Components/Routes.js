import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ImgPrescripcion from './ImgPrescripcion';
import Tabs from './Tabs';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Tabs} />
            {/* <Route exact path="/image/:url" component={ImgPrescripcion} /> */}
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;