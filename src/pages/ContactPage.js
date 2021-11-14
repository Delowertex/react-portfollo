import React, {Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

class ContactPage extends React.Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <PageTop pagetitle="Contact us" />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;