import React from "react";
import MyNavbar from "../components/MyNavbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "../components/Footer";
import ScrollToTop from "../ScrollToTop";

export default function main() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <MyNavbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}
