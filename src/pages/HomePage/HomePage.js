import React, {Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import TopBanner from "../../components/TopBanner/TopBanner";
import Services from "../../components/Services/Services";
import Analysis from "../../components/Analysis/Analysis";
import Summary from "../../components/Summary/Summary";
import RecentProject from "../../components/RecentProject/RecentProject";
import Courses from "../../components/Courses/Courses";
import Video from "../../components/Video/Video";
import ClientReview from "../../components/ClientReview/ClientReview";
import Footer from "../../components/Footer/Footer";

class HomePage extends React.Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProject />
                <Courses />
                <Video />
                <ClientReview />
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;