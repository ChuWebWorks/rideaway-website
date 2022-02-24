import Button from '../ui/Button';

const DashboardHeader = () => {
    return (
        <header className='bg-white p-2 relative'>
            <h1 className='m-0 pl-4 inline-block'>Welcome, User!</h1>
            
            <div className='mt-1 mr-2 float-right'>
                <Button href='/app-demo/' title='App Demo' type='primary' buttonColor='royal-blue' />
            </div>
        </header>
    )
}

export default DashboardHeader