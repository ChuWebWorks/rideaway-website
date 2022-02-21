import Button from './ui/Button';

import RideawayImage from '../images/Rideaway-Phones.png';
import GooglePlayStoreImage from '../images/Google Play Store.png';
import AppleStoreImage from '../images/Apple Store.png';


const FrontpageBanner = () => {
    return (
        <section className='frontpage-banner md:mb-10'>
            <div className='bg-royal-blue px-2 relative'>
                <div className='bg-lines--vertical absolute -z-50 left-0 right-0 top-0 bottom-0 m-auto'></div>
                <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2 relative z-1'>
                    <div className="text-white py-10 md:pr-20">
                        <h1 className="my-4">All-In-One Group Ride Tracking App</h1>
                        <p className='my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        
                        <Button href='/' title='Free Demo' type='primary' buttonColor='white'/>
                        <a href='/' className="inline-block mx-4 hover:underline">Learn More</a>
                    </div>
                    <div className="relative">
                        <div className='absolute h-1/2 w-screen -left-2 bottom-0 bg-white -z-50 md:hidden'></div>
                        <img className='left-0 right-0 mx-auto relative md:absolute rideaway__image w-full z-1' src={RideawayImage} />
                    </div>
                </div>
            </div>
            <div className="container text-center md:px-2 md:text-left max-w-screen-lg mx-auto py-10">
                <a href='https://www.apple.com/app-store/' target='_blank' className='inline-block mx-2 md:px-0 md:mr-2 md:ml-0 shadow-2xl'><img className='' src={AppleStoreImage} /></a>
                <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank' className='inline-block mx-2 shadow-2xl'><img className='' src={GooglePlayStoreImage} /></a>
            </div>
        </section>
    )
}

export default FrontpageBanner
