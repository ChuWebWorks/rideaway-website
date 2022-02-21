import Button from './ui/Button';

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

                <li className="relative z-50 mt-10 md:mt-0">
                    <Button href='/' title='Free Demo' type='primary' buttonColor='white'/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
