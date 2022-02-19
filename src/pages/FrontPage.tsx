import Header from '../components/Header';
import FrontpageBanner from '../components/FrontpageBanner';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import PlanComparison from '../components/PlanComparison';
import Footer from '../components/Footer';

const FrontPage = () => {
    return (
        <>
            <Header />
            <FrontpageBanner />
            <AboutUs />
            <Features />
            <PlanComparison />
            <Footer />
        </>
    )
}

export default FrontPage
