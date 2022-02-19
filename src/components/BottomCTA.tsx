import GooglePlayStoreImage from '../images/Google Play Store.png';
import AppleStoreImage from '../images/Apple Store.png';
import BottomCTAImg from '../images/Bottom CTA.png';

const BottomCTA = () => {
    return (
        <section className='bottom-cta my-10'>
            <div className='container max-w-screen-lg mx-auto bg-royal-blue grid md:grid-cols-2 rounded-2xl'>
                <div className='text-white pt-10 pb-10 px-10'>
                    <h2 className='text-3xl'>Keep The Pack Together</h2>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href='https://www.apple.com/app-store/' target='_blank' className='inline-block mr-4 shadow-2xl'><img className='' src={AppleStoreImage} /></a>
                    <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank' className='inline-block shadow-2xl'><img className='' src={GooglePlayStoreImage} /></a>

                </div>
                <div className='relative p-10 text-center'>
                    <div className='inline-block relative'>
                        <img src={BottomCTAImg} className='bottom-cta__image mx-auto inline-block relative z-1' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomCTA