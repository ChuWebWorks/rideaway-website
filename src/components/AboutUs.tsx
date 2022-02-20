import AboutUsImage from '../images/About Us Image.png';

const AboutUs = () => {
    return (
        <section className='aboutus md:my-10 relative overflow-x-hidden'>
            <div className='bg-outer-circle bg-royal-blue opacity-10 rounded-full absolute -right-20 md:-left-20 top-20 grid content-center -z-50'>
                <div className='bg-inner-circle rounded-full bg-white inline-block mx-auto'></div>
            </div>
            <div className='px-2 md:py-8'>
                <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2'>
                    <div className='order-2 md:order-1 md:-ml-10 md:pr-10'>
                       <img className='mx-auto' src={AboutUsImage} />
                    </div>
                    <div className='order-1 md:order-2 md:pl-10'>
                        <h2 className='text-3xl mt-0'>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href="/" className='inline-block px-7 py-1 my-4 rounded-full bg-royal-blue text-white font-semibold border-royal-blue border-2 hover:bg-transparent hover:text-royal-blue hover:no-underline ease-in-out duration-100'>Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs