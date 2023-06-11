import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Semple from "./pages/Semple/Semple";


const Router = () => {
return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Semple}></Route>
        </Switch>
    </BrowserRouter>
)
}

export default Router;