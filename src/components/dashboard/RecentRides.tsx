import Button from '../ui/Button';

const RecentRidesModule = () => {
    return (
        <section className='bg-white p-4 m-4 rounded-lg w-max max-w-2xl'>
            <h2 className='mt-0'>Recent Rides</h2>

            <table className='w-full table-auto'>
                <thead className='text-left'>
                    <th>Ride ID</th>
                    <th>Date</th>
                    <th>Distance</th>
                    <th>Duration</th>
                    <th>Bike</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>#1</td>
                        <td>8/16/2021</td>
                        <td>73 mi</td>
                        <td>1h32m</td>
                        <td>2008 Honda CBR 600RR</td>
                        <td><Button href='/' title='Details' type='primary' buttonColor='royal-blue'/></td>
                    </tr>
                    <tr>
                        <td>#2</td>
                        <td>8/26/2021</td>
                        <td>43 mi</td>
                        <td>42m</td>
                        <td>2008 Honda CBR 600RR</td>
                        <td><Button href='/' title='Details' type='primary' buttonColor='royal-blue'/></td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>9/3/2021</td>
                        <td>55 mi</td>
                        <td>58m</td>
                        <td>2008 Honda CBR 600RR</td>
                        <td><Button href='/' title='Details' type='primary' buttonColor='royal-blue'/></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default RecentRidesModule 