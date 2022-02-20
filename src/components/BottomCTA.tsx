import GooglePlayStoreImage from '../images/Google Play Store.png';
import AppleStoreImage from '../images/Apple Store.png';
import BottomCTAImg from '../images/Bottom CTA.png';

const BottomCTA = () => {
    return (
        <section className='bottom-cta px-2 my-10'>
            <div className='container px-4 mx-auto max-w-screen-lg mx-auto bg-royal-blue rounded-2xl relative grid md:grid-cols-2 md:grid-rows-2 overflow-hidden'>
                <div className='hidden bg-outer-circle bg-white opacity-30 rounded-full absolute left-24 -bottom-20 md:grid content-center -z-50'>
                    <div className='bg-inner-circle rounded-full bg-royal-blue inline-block mx-auto'></div>
                </div>
                <div className='text-white md:pt-10 md:pb-10 md:px-10'>
                    <h2 className='text-3xl'>Keep The Pack Together</h2>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='relative min-h-max md:row-span-2 md:pt-10 md:px-10 mb-5'>
                    <img src={BottomCTAImg} className='left-0 right-0 mx-auto relative  rideaway__image w-full z-1' />
                </div>
                <div className='relative text-center md:text-left mb-5 md:mb-0 md:px-10'>
                    <a href='https://www.apple.com/app-store/' target='_blank' className='inline-block mx-2 md:mx-0 md:mr-4 md:px-0 md:mr-2 md:ml-0 shadow-2xl'><img className='' src={AppleStoreImage} /></a>
                    <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank' className='inline-block shadow-2xl'><img className='' src={GooglePlayStoreImage} /></a>
                </div>
            </div>
        </section>
    )
}

export default BottomCTA