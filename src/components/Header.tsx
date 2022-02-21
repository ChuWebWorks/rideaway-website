import Nav from './Nav';
import MenuIcon from './ui/MenuIcon';
import BgCircle from './ui/BgCircle';

const Header = () => {

    return (
        <header>
            <div className='masthead bg-royal-blue text-white px-2 py-8 relative overflow-x-hidden'>
                <BgCircle circleColor='white' position='-right-20 -top-20 ' opacity='10'/>
                <div className='bg-lines--vertical absolute left-0 right-0 top-0 bottom-0 m-auto'></div>
                <div className='container max-w-screen-lg mx-auto flex items-center justify-between relative z-1'>
                    <a href="/" className='font-semibold text-xl py-2 relative z-50'>Rideaway</a>
                    <MenuIcon />
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header