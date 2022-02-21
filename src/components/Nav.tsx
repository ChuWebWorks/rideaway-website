const Nav = () => {
    const navigationLinks = [
        ['About Us','/'],
        ['Features','/'],
        ['Compare Plans','/'],
        ['Contact Us','/']
    ].map(([title, url]) => (<li key={title} className='my-5'><a href={url} className="text-white hover:underline">{title}</a></li>));

    return (
        <nav className='hidden mobile-nav md:block relative z-20 md:z-50'>
            <ul className='px-2 py-8 md:px-0 md:py-0 md:ml-auto md:flex md:flex-row md:items-center md:space-x-4'>

                { navigationLinks }

                <li className="relative z-50">
                    <a href="google.com" className='inline-block w-full px-7 py-2 mt-10 md:mt-0 text-center rounded-lg border-2 border-white bg-white text-royal-blue font-semibold hover:bg-transparent hover:text-white hover:no-underline ease-in-out duration-100'>Free Demo</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
