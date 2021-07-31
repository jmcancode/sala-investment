import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import DashBoard from "./pages/dashBoard";
import ReportsPage from "./pages/reports";
import MessageBoard from "./pages/message";
import SignIn from "./pages/signIn";
// components
import TopNav from "./components/nav/nav";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} />
        <div className="App">
          <TopNav />
          <Router path="/dashboard" component={DashBoard} />
          <Router path="/reports" component={ReportsPage} />
          <Router path="/message" component={MessageBoard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
