const Footer = () => {
    return (
        <footer className='bg-tuna text-white pb-5'>
            <div className="container max-w-screen-lg mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3">
                <div className='px-2 md:px-10 mb-10'>
                    <h2 className='mt-0 text-base'>
                        Contact Us
                    </h2>
                    <p className='l'>
                        1 Lorem Ipsum<br />
                        Portland, ME, 04102<br />
                        1-234-567-8900
                    </p>
                </div>
                <div className='px-2 md:px-10 mb-10'>
                    <h2 className='mt-0 mb-3 text-base'><a href='/'>Rideaway</a></h2>
                    <ul className=''>
                        <li className='mb-2'>
                            <a href="google.com">About Us</a>
                        </li>
                        <li className='mb-2'>
                            <a href="google.com">Features</a>
                        </li>
                        <li className='mb-2'>
                            <a href="google.com">Compare Plans</a>
                        </li>
                        <li className='mb-2'>
                            <a href="google.com">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='px-2 md:px-10'>
                    <h2 className='mt-0 mb-3 text-base'>
                        More Info
                    </h2>
                    <ul className=''>
                        <li className='mb-2'>
                            <a href="google.com">Site Map</a>
                        </li>
                        <li className='mb-2'>
                            <a href="google.com">Privacy Policy</a>
                        </li>
                        <li className='mb-2'>
                            <a href="google.com">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container max-w-screen-lg mx-auto">
                <div className='px-2 md:px-10'>
                <p>© 2022 Rideaway</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
