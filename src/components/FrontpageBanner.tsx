import RideawayImage from '../images/Rideaway-Phones.png';
import GooglePlayStoreImage from '../images/Google Play Store.png';
import AppleStoreImage from '../images/Apple Store.png';


const FrontpageBanner = () => {
    return (
        <section className='frontpage-banner mb-10'>
            <div className='bg-royal-blue px-2'>
                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2'>
                    <div className="text-white py-10 pr-20">
                        <h1 className="my-4">All-In-One Group Ride Tracking App</h1>
                        <p className='my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <a href='/' className="inline-block px-5 py-2 rounded-full bg-white text-royal-blue font-semibold my-2">Free Demo</a>
                        <a href='/' className="inline-block mx-4 hover:underline">Learn More</a>
                    </div>
                    <div className="relative">
                        <img className='left-0 right-0 mx-auto md:absolute rideaway__image' src={RideawayImage} />
                    </div>
                </div>
            </div>
            <div className="container max-w-screen-lg mx-auto py-10">
                <a href='https://www.apple.com/app-store/' target='_blank' className='inline-block mr-4 shadow-2xl'><img className='' src={AppleStoreImage} /></a>
                <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank' className='inline-block shadow-2xl'><img className='' src={GooglePlayStoreImage} /></a>
            </div>
        </section>
    )
}

export default FrontpageBanner