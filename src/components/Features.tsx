import AddFriendsImg from '../images/Add Friends.png';
import KeepTrackImg from '../images/Keep Track.png';
import PlanRoutesImg from '../images/Plan Routes.png';
import SeparatedImg from '../images/Separated.png';

const Features = () => {
    return (
        <section className='aboutus my-10'>
            <div className='bg-porcelain px-2 py-8'>
                <h2 className='text-center'>Features</h2>
                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2 mb-20'>
                    <div className='relative grid content-center'>
                        <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                        <img src={KeepTrackImg} className='features__image mx-auto relative z-1' />
                    </div>
                    <div className='pl-10 grid content-center'>
                        <div className='inline-block'>
                            <h3 className='h2'>Keep Track of Where Everyone Is In Your Group Ride</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="/" className='inline-block my-4 px-5 py-2 rounded-full border-2 border-royal-blue text-royal-blue font-semibold my-2'>Learn More</a>
                            </div>
                    </div>
                </div>

                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2 mb-20'>
                    <div className='pl-10 grid content-center'>
                        <div className='inline-block'>
                            <h3 className='h2'>Know When Someone Has Separated Real-Time</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="/" className='inline-block my-4 px-5 py-2 rounded-full border-2 border-royal-blue text-royal-blue font-semibold my-2'>Learn More</a>
                            </div>
                    </div>
                    <div className='relative grid content-center'>
                        <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                        <img src={SeparatedImg} className='features__image mx-auto relative z-1' />
                    </div>
                </div>

                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2 mb-20'>
                    <div className='relative grid content-center'>
                        <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                        <img src={AddFriendsImg} className='features__image mx-auto relative z-1' />
                    </div>
                    <div className='pl-10 grid content-center'>
                        <div className='inline-block'>
                            <h3 className='h2'>Easily Invite Participants</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="/" className='inline-block my-4 px-5 py-2 rounded-full border-2 border-royal-blue text-royal-blue font-semibold my-2'>Learn More</a>
                            </div>
                    </div>
                </div>

                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2 mb-5'>
                    <div className='pl-10 grid content-center'>
                        <div className='inline-block'>
                            <h3 className='h2'>Keep Track of Where Everyone Is In Your Group Ride</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="/" className='inline-block my-4 px-5 py-2 rounded-full border-2 border-royal-blue text-royal-blue font-semibold my-2'>Learn More</a>
                            </div>
                    </div>
                    <div className='relative grid content-center'>
                        <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                        <img src={PlanRoutesImg} className='features__image mx-auto relative z-1' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features