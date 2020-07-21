import React from "react";
import MyNavbar from "../components/MyNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "../components/Footer";
import ScrollToTop from "../ScrollToTop";

export default function main() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}
