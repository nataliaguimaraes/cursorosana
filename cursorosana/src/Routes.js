import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MainLayout } from "./pages/MainLayout";

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <MainLayout><SelectHelp/></MainLayout>
            </Route>
            
        </Switch>
    </Router>
  );
}

