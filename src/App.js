import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadClients } from "./redux/actions/client.actions";
import Main from "./routes/Main";
import NotFound from "./routes/NotFound";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/client/:clientId" component={Main} />
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
