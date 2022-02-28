import Button from './ui/Button';
import BgCircle from './ui/BgCircle';

import AboutUsImage from '../images/About_Us_Image.png';

const AboutUs = () => {
    return (
        <section className='aboutus md:my-10 relative overflow-x-hidden'>
            {/* <div className='bg-outer-circle bg-royal-blue opacity-10 rounded-full absolute -right-20 md:-left-20 top-20 grid content-center -z-50'>
                <div className='bg-inner-circle rounded-full bg-white inline-block mx-auto'></div>
            </div> */}

            <BgCircle circleColor='royal-blue' position='-right-20 md:-left-20 top-20 ' opacity='10' />

            <div className='px-2 md:py-8 relative z-50'>
                <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2'>
                    <div className='order-2 md:order-1 md:-ml-10 md:pr-10'>
                       <img alt='' className='mx-auto' src={AboutUsImage} />
                    </div>
                    <div className='order-1 md:order-2 md:pl-10'>
                        <h2 className='text-3xl mt-0'>About Us</h2>
                        <p className='my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
      
                        <Button href='/' title='Get In Touch' type='primary' buttonColor='royal-blue'/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs