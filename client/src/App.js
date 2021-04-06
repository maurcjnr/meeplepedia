import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Temp from "./components/temp/Temp";

import Home from "./components/content/home/Home";
import About from "./components/content/about/About";
import Contact from "./components/content/contact/Contact";
import Support from "./components/content/support/Support";
import MyAccount from "./components/content/panel/Login";

import Games from "./components/content/games/Games";
import Ranking from "./components/content/ranking/Ranking";
import Posts from "./components/content/posts/Posts";
import Events from "./components/content/events/Events";
import Groups from "./components/content/groups/Groups";
import Donation from "./components/content/donation/Donation";

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Temp}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/support" component={Support}></Route>
      <Route path="/myaccount" component={MyAccount}></Route>
      <Route path="/games" component={Games}></Route>
      <Route path="/ranking" component={Ranking}></Route>
      <Route path="/posts" component={Posts}></Route>
      <Route path="/events" component={Events}></Route>
      <Route path="/groups" component={Groups}></Route>
      <Route path="/donation" component={Donation}></Route>
    </Switch>
  );
};
