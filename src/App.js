import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Dropdown from "./components/Dropdown";
import Contact from "./pages/contact";
import { AnimatePresence } from "framer-motion";
import { Router } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const url = `https://www.jack-transue.com/${Router.route}`;

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Switch canonical={url} key={url}>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route
            path="/friends"
            component={() => {
              window.open("https://www.friendstheexperience.com/");
              return null;
            }}
          />
          <Route
            path="/outside"
            component={() => {
              window.open("https://www.sfoutsidelands.com/");
              return null;
            }}
          />
          <Route
            path="/the-office"
            component={() => {
              window.open("https://www.theofficeexperience.com/");
              return null;
            }}
          />
          <Route
            path="/cohab"
            component={() => {
              window.location.href = "https://cohab-backend.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/local-e"
            component={() => {
              window.location.href = "https://local-e-app.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/office-space"
            component={() => {
              window.location.href = "https://kiwi3p.github.io/Ironhack-Game/";
              return null;
            }}
          />
          <Route
            path="/holiday1"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Presents_300x250/";
              return null;
            }}
          />
          <Route
            path="/holiday2"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Unwrappable_970x250/";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => {
              window.location.href =
                "https://www.linkedin.com/in/jack-transue/";
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.location.href = "https://github.com/Kiwi3p";
              return null;
            }}
          />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
