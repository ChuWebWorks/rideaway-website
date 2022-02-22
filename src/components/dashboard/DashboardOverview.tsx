import DashboardHeader from './DashboardHeader';
import RecentRides from './RecentRides';
import UpcomingRides from './UpcomingRides';

const DashboardOverview = () => {
    return (
        <div className='w-full bg-porcelain'>
            <DashboardHeader />
            <main className='flex flex-row flex-wrap'>
                <RecentRides />
                <UpcomingRides />
            </main>
        </div>
    )
}

export default DashboardOverview