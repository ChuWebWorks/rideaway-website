import AboutUsImage from '../images/About Us Image.png';

const AboutUs = () => {
    return (
        <section className='aboutus my-10 relative'>
            <div className='bg-outer-circle bg-royal-blue opacity-10 rounded-full absolute -left-20 top-20 grid content-center -z-50'>
                <div className='bg-inner-circle rounded-full bg-white inline-block mx-auto'></div>
            </div>
            <div className='bg-white px-2 py-8'>
                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2'>
                    <div className='-ml-10 pr-10'>
                       <img className='mx-auto' src={AboutUsImage} />
                    </div>
                    <div className='pl-10'>
                        <h2 className='text-3xl'>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href="/" className='inline-block px-7 py-2 rounded-full bg-royal-blue text-white font-semibold my-4'>Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs