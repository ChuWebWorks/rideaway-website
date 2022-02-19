import Header from '../components/Header';
import FrontpageBanner from '../components/FrontpageBanner';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import Body from '../components/Body';
import Footer from '../components/Footer';

const FrontPage = () => {
    return (
        <>
            <Header />
            <FrontpageBanner />
            <AboutUs />
            <Features />
            <Body />
            <Footer />
        </>
    )
}

export default FrontPage
