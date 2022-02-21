import AppStoreButtons from './ui/AppStoreButtons';
import BgCircle from './ui/BgCircle';

import BottomCTAImg from '../images/Bottom CTA.png';

const BottomCTA = () => {
    return (
        <section className='bottom-cta px-2 my-10'>
            <div className='container px-4 mx-auto max-w-screen-lg mx-auto bg-royal-blue rounded-2xl relative grid md:grid-cols-2 md:grid-rows-2 overflow-hidden'>

                <BgCircle circleColor='white' position='-left-full md:left-24 md:-bottom-20 ' opacity='30'/>

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
                    <AppStoreButtons />
                </div>
            </div>
        </section>
    )
}

export default BottomCTA