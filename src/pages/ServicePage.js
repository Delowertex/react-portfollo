import React, { Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

class ServicePage extends React.Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <PageTop pagetitle="Serices" />
                <Services />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicePage;