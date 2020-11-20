import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WWE from "../WWE/WWE";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="navBar">
          <h1 id="header">wwdatabase.com</h1>

          <div className="navLinks">
            <Link className="navLink" to="/">
              Home
            </Link>

            <Link className="navLink" to="/WWE">
              WWE Title
            </Link>

            <Link className="navLink" to="/AEW">
              WWE Womans Title
            </Link>

            <Link className="navLink" to="/WCW">
              WWE Tag Team Titles
            </Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/WWE">
            <WWE />
          </Route>
          <Route path="/AEW">
            <AEW />
          </Route>
          <Route path="/WCW">
            <WCW />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  function Home() {
    return <h2>Home</h2>;
  }

  function AEW() {
    return <h2>AEW</h2>;
  }
  function WCW() {
    return <h2>WCW</h2>;
  }
};

export default Navbar;
