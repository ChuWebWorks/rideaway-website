import Button from '../ui/Button';

const UpcomingRides = () => {
    return (
        <section className='bg-white p-4 m-4 rounded-lg flex-auto flex flex-col'>
            <h2 className='mt-0'>Upcoming Rides</h2>

            <div className='grow h-full'>
                <table className='w-full table-auto'>
                    <thead className='text-left'>
                        <tr>
                            <th>Ride ID</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href='/'>#4</a></td>
                            <td><a href='/'>10/25/2021</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <Button href='/' title='Find a Group' type='primary' buttonColor='royal-blue'/>
            </div>
        </section>
    )
}

export default UpcomingRides