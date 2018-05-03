import "focus-visible";

import "./scss/normalize.css";
import "./scss/index.scss";

import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Decks from "./components/decks";
import CreateDeck from "./components/create-deck";
import StudyDeck from "./components/study-deck";
import Settings from "./components/settings";
import ServiceWorkerPopup from "./components/service-worker-popup";
import NoMatch from "./components/no-match";

import { initServiceWorker } from "./services/service-worker";

render(
    <HashRouter>
        <React.Fragment>
            <Header />
            <main className="main">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/decks" exact component={Decks}></Route>
                    <Route path="/decks/create" component={CreateDeck}></Route>
                    <Route path="/decks/:id" component={StudyDeck}></Route>
                    <Route path="/settings" component={Settings}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
                <ServiceWorkerPopup />
            </main>
        </React.Fragment>
    </HashRouter>,
    document.getElementById("app")
);

if ("serviceWorker" in navigator) {
    initServiceWorker();
}
