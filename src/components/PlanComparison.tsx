import Button from './ui/Button';
import BgCircle from './ui/BgCircle';

import CheckIcon from '../images/check.png';

const PlanComparison = () => {
    return (
        <section className='plan-comparison my-5 relative'>
            <BgCircle circleColor='royal-blue' position='-left-20 top-20 ' opacity='10 md:opacity-100'/>
            <div className='container max-w-screen-lg mx-auto px-2 py-1 relative z-50'>
                <h2 className='text-center text-3xl'>Plan Comparison</h2>
                <p className='text-center max-w-prose mx-auto mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>

                <table className='responsive-table w-full table-fixed'>
                    <thead>
                        <tr>
                            <th scope='col' className='text-xl w-1/2 text-left'>Features Included</th>
                            <th scope='col' className='text-xl text-center'>Free</th>
                            <th scope='col' className='text-xl text-center'>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th scope='row' className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
                            <td></td>
                            <td className='text-center'><img alt='' src={CheckIcon} className='inline-block'/></td>
                        </tr>
                        <tr>
                            <th className='hidden md:table-cell bg-white w-1/2'></th>
                            <td className='bg-white text-center'><Button href='/' title='Get Started' type='primary' buttonColor='royal-blue' /></td>
                            <td className='bg-white text-center'><Button href='/' title='Get Started' type='primary' buttonColor='royal-blue' /></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PlanComparison