import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MainLayout } from "./MainLayout/MainLayout";
import { PreMatricula } from "./components/PreMatricula/PreMatricula"
import { PreMatriculaNext } from "./components/PreMatricula/PreMatriculaNext"
import { Links } from "./components/Links/Links"

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/preMatricula" render= { (props) => <MainLayout {...props}><PreMatricula {...props}/></MainLayout>} >
            </Route>
            <Route exact path="/preMatriculaNext" render= { (props) => <MainLayout {...props}><PreMatriculaNext {...props}/></MainLayout>} >
            </Route>
            <Route exact path="/links" render= { (props) => <MainLayout {...props}><Links {...props}/></MainLayout>} >
            </Route>
        </Switch>
    </Router>
  );
}

