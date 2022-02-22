import Button from '../ui/Button';
import BgCircle from '../ui/BgCircle';

const DashboardNav = () => {
    return (
        <nav className='bg-royal-blue text-white max-w-xs w-full p-6 h-screen flex flex-col content-between relative overflow-hidden'>
            <BgCircle circleColor='white' position='-right-20 -top-20 ' opacity='10'/>
            <div className='relative z-50 grow h-full'>
                <a href="/" className='font-semibold text-xl py-2 hover:no-underline'>Rideaway <span className='font-light text-base ml-2'>Dashboard</span></a>

                <p className='mt-10 mb-2 font-light'>MENU</p>

                <ul>
                    <li className=''><a href='/' className='mb-5 pb-4 border-b border-persian-blue block'>Overview</a></li>
                    <li className='mb-5'><a href='/' className='mb-5 pb-4 border-b border-persian-blue block'>Plan a Group Ride</a></li>
                    <li className='mb-5'><a href='/' className='mb-5 pb-4 border-b border-persian-blue block'>Find a Group Ride</a></li>
                    <li className='mb-5'><a href='/' className='mb-5 pb-4 border-b border-persian-blue block'>Routes</a></li>
                    <li className='mb-5'><a href='/' className='mb-5 pb-4 border-b border-persian-blue block'>Charity Rides</a></li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-light'>Profile</p>
                <a href='/' className='mb-5 text-xl'>User</a>
                <Button href='/' title='Log Out' type='primary' buttonColor='white' />
            </div>
        </nav>
    )
}

export default DashboardNav