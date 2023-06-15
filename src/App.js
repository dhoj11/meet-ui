import React from 'react';

import Router from "./Router";
import Frame from "./components/Frame/Frame";
import SinglePage from "./components/Layout/SinglePage";
import store from "./store/store";
import {Provider} from "react-redux";
import {Reset} from "styled-reset";

function App() {
  return (
    <>
        <Reset />
        <Frame>
            <SinglePage>
                <Provider store={store}>
                    <Router />
                </Provider>
            </SinglePage>
        </Frame>
    </>
  );
}

export default App;
