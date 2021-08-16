import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home"
import PDFReader from './componets/PDFReader';
import Notice from './pages/Notice';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/category/:name" component={PDFReader}/>
                <Route path="/notice" component={Notice}/>
              
            </Switch>
        </BrowserRouter>
    )
}