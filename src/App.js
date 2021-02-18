import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadClients } from "./redux/actions/client.actions";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import ClientList from "./components/ClientList/ClientList";
import { Button, Menu, Segment, Sidebar } from "semantic-ui-react";
import NotFound from "./routes/NotFound";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/client/:clientId?">
          {window.innerWidth > 767 ? (
            <div className="wrapper">
              <div className="client-list">
                <ClientList />
              </div>
              <Route
                exact
                path="/client"
                component={() => <div>Please select client</div>}
              />
              <Route path="/client/:clientId" component={ClientDetails} />
            </div>
          ) : (
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="overlay"
                onHide={() => setVisibleMenu(false)}
                visible={visibleMenu}
                width="wide"
              >
                <ClientList />
              </Sidebar>
              <div className="mobile-wrapper">
                <Button
                  icon="bars"
                  checked={visibleMenu}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                />
                <Sidebar.Pusher>
                  <Route
                    exact
                    path="/client"
                    render={() => setVisibleMenu(true)}
                  />
                  <Route path="/client/:clientId" component={ClientDetails} />
                </Sidebar.Pusher>
              </div>
            </Sidebar.Pushable>
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
