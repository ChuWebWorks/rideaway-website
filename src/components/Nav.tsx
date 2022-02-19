const Nav = () => {
    const navigationLinks = [
        ['About Us','/'],
        ['Features','/'],
        ['Compare Plans','/'],
        ['Contact Us','/']
    ].map(([title, url]) => (<a href={url} className="hover:underline">{title}</a>));

    return (
        <nav className=''>
            <ul className='ml-auto flex items-center space-x-4'>

                { navigationLinks }

                <li className="inline-block">
                    <a href="google.com" className='px-7 py-2 rounded-full bg-white hover:bg-white-300 text-royal-blue font-semibold'>Free Demo</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
