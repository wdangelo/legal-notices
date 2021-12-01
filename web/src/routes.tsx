import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home"
import PDFReader from './componets/PDFReader';
import Notice from './pages/Notice';
import CallCenter from './pages/CallCenter';
import createCategories from "./pages/controlPainel/createCategories";
import createIcons from "./pages/controlPainel/createIcons";



export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/category/:name" component={PDFReader}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/callcenter" component={CallCenter}/>

              <Route path="/callcenter" component={CallCenter}/>

              <Route path="/create-categories" component={createCategories}/>
              <Route path="/create-icons" component={createIcons}/>
            </Switch>
        </BrowserRouter>
    )
}