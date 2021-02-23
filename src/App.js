import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadClients } from "./redux/actions/client.actions";
import toggleSidebar from "./redux/actions/sidebar.actions";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import DesktopLayout from "./layout/DesktopLayout";
import MobileLayout from "./layout/MobileLayout";
import NotFound from "./routes/NotFound";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
    dispatch(toggleSidebar());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/client/:clientId?">
          {window.innerWidth > 767 ? (
            <DesktopLayout>
              <Route
                exact
                path="/client"
                component={() => <div>Please select client</div>}
              />
              <Route path="/client/:clientId" component={ClientDetails} />
            </DesktopLayout>
          ) : (
            <MobileLayout>
              <Route path="/client/:clientId" component={ClientDetails} />
            </MobileLayout>
          )}
        </Route>
        <Route exact path="/">
          <Redirect to="/client/" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
