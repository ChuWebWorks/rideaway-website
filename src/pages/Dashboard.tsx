import DashboardNav from '../components/dashboard/DashboardNav';
import DashboardOverview from '../components/dashboard/DashboardOverview';

const Dashboard = () => {
    return ( 
        <div className='flex flex-row relative'>
            <DashboardNav />
            <DashboardOverview />
        </div>
    )
}

export default Dashboard
