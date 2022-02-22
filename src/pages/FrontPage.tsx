import Header from '../components/Header';
import FrontpageBanner from '../components/FrontpageBanner';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import PlanComparison from '../components/PlanComparison';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';

const FrontPage = () => {
    return (
        <>
            <Header />
            <main>
                <FrontpageBanner />
                <AboutUs />
                <Features />
                <PlanComparison />
                <BottomCTA />
            </main>
            <Footer />
        </>
    )
}

export default FrontPage
