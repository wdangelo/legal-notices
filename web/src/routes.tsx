import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home"
import PDFReader from './componets/PDFReader';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/category" component={PDFReader}/>
              
            </Switch>
        </BrowserRouter>
    )
}