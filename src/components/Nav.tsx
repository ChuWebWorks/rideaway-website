const Nav = () => {
    const navigationLinks = [
        ['About Us','/'],
        ['Features','/'],
        ['Compare Plans','/'],
        ['Contact Us','/']
    ].map(([title, url]) => (<a href={url} className="hover:underline">{title}</a>));

    return (
        <nav className='hidden md:block'>
            <ul className='ml-auto flex items-center space-x-4'>

                { navigationLinks }

                <li className="inline-block">
                    <a href="google.com" className='inline-block px-7 py-1 rounded-full border-2 border-white bg-white text-royal-blue font-semibold hover:bg-transparent hover:text-white hover:no-underline ease-in-out duration-100'>Free Demo</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
