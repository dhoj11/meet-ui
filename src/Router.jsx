import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Semple from "./pages/Semple/Semple";
import Semple2 from "./pages/Semple2/Semple2";


const Router = () => {
return (
    <BrowserRouter>
        <Switch>
            <Route path="/semple" component={Semple}></Route>
            <Route path="/semple2" component={Semple2}></Route>
        </Switch>
    </BrowserRouter>
)
}

export default Router;