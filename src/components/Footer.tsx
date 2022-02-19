const Footer = () => {
    return (
        <footer className='bg-tuna text-white pb-5'>
            <div className="container max-w-screen-lg mx-auto py-10 grid grid-cols-3">
                <div className='px-10'>
                    <h2 className='mt-0 text-base'>
                        Contact Us
                    </h2>
                    <p className='l'>
                        1 Lorem Ipsum<br />
                        Portland, ME, 04102<br />
                        1-234-567-8900
                    </p>
                </div>
                <div className='px-10'>
                    <h2 className='mt-0 text-base'><a href='/'>Rideaway</a></h2>
                    <ul className=''>
                        <li>
                            <a href="google.com">About Us</a>
                        </li>
                        <li>
                            <a href="google.com">Features</a>
                        </li>
                        <li>
                            <a href="google.com">Compare Plans</a>
                        </li>
                        <li>
                            <a href="google.com">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='px-10'>
                    <h2 className='mt-0 text-base'>
                        More Info
                    </h2>
                    <ul className=''>
                        <li>
                            <a href="google.com">Site Map</a>
                        </li>
                        <li>
                            <a href="google.com">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="google.com">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container max-w-screen-lg mx-auto">
                <div className='px-10'>
                <p>© 2021 Rideaway</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
