import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className='bg-royal-blue text-white px-2 py-8'>
                <div className='container max-w-screen-lg mx-auto flex items-center justify-between'>
                    <a href="/" className='font-semibold text-xl tracking-tight py-2'>Rideaway</a>
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header