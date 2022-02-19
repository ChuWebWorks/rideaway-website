import CheckIcon from '../images/check.png';

const PlanComparison = () => {
    return (
        <section className='plan-comparison my-5'>
            <div className='container max-w-screen-lg mx-auto px-2 py-1'>
                <h2 className='text-center text-3xl'>Plan Comparison</h2>
                <p className='text-center max-w-prose mx-auto mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>

                <table className='w-full table-fixed'>
                    <thead>
                        <tr>
                            <th scope='col' className='text-xl w-1/2 text-left'>Features</th>
                            <th scope='col' className='text-xl text-center'>Free</th>
                            <th scope='col' className='text-xl text-center'>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td></td>
                            <td className='text-center'><img src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <td className='bg-white w-1/2'></td>
                            <td className='bg-white text-center'><a href="/" className='inline-block px-7 py-2 rounded-full bg-royal-blue text-white font-semibold'>Get Started</a></td>
                            <td className='bg-white text-center'><a href="/" className='inline-block px-7 py-2 rounded-full bg-royal-blue text-white font-semibold'>Get Started</a></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PlanComparison