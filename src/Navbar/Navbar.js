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
              WWE Title
            </Link>

            <Link className="navLink" to="/universal">
              WWE Universal Title
            </Link>

            <Link className="navLink" to="/woman">
              WWE Womans Title
            </Link>

            <Link className="navLink" to="/tag">
              WWE Tag Team Titles
            </Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/woman">
            <Woman />
          </Route>
          <Route path="/universal">
            <Universal />
          </Route>
          <Route path="/tag">
            <Tag />
          </Route>
          <Route path="/">
            <WWE />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Universal() {
    return <h2 className="comingSoon">WWE Universal Title Coming Soon</h2>;
  }
  function Woman() {
    return <h2 className="comingSoon">WWE Womans Title Coming Soon</h2>;
  }
  function Tag() {
    return <h2 className="comingSoon">WWE Tag Team Titles Coming Soon</h2>;
  }
};

export default Navbar;
