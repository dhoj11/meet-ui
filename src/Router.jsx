import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Semple from "./pages/Semple/Semple";
import Semple2 from "./pages/Semple2/Semple2";
import MeetingRoom from "./pages/MeetingRoom/MeetingRoom";


const Router = () => {
return (
    <BrowserRouter>
        <Switch>
            <Route path="/semple" component={Semple}></Route>
            <Route path="/semple2" component={Semple2}></Route>
            <Route path="/meeting-room" component={MeetingRoom}></Route>
        </Switch>
    </BrowserRouter>
)
}

export default Router;
