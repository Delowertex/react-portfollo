import React, {Fragment} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Portfollio from "../pages/Portfollio";
import CoursesPage from "../pages/CoursesPage";
import ServicePage from "../pages/ServicePage";

class AppRoute extends React.Component {
    render() {
        return (
            <Fragment>

                <Routes>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/course" component={CoursesPage} />
                    <Route exact path="/portfollio" component={Portfollio} />
                    <Route exact path="/service" component={ServicePage} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;