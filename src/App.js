import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/404/PageNotFound";
import CoursesPage from "./components/coursesPage";
import ManageCoursePage from "./components/coursesPage/ManageCoursePage";
import AuthorsPage from "./components/authorsPage";

function App() {
  return (
    <div id="app" className="container-fluid">
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
