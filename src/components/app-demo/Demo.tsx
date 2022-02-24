import iPhone from '../../images/iphone 13.png';
import Map from './Map';

const Demo = () => {
    return (
        <main className='min-h-screen h-full mx-auto bg-porcelain'>
            <section className='text-center py-5'>
                <h1 className='m-0'>App Demo</h1>
            </section>
            <section className='app-demo-container shadow-2xl border-2 rounded-3xl overflow-hidden mx-auto'>
                <div className='relative app-directions-container bg-royal-blue text-white text-center grid content-center py-10 px-2'>
                    <h2 className='m-0'>Brighton <span className='font-normal'>Ave</span></h2>
                    <p>toward <span className='text-xl'><strong>Main</strong> St</span></p>
                    <div className='absolute px-7 py-2 -bottom-10 bg-persian-blue rounded-br-lg'>
                        Turn Left
                    </div>
                </div>

                <div className='app-main-container min-h-full grid'>
                    <Map />
                </div>

                <div className='app-notices-container bg-persian-blue text-white grid content-center py-10 px-10'>
                    <h2 className='m-0'>34 min <span className='font-normal text-base'>away from destination</span></h2>
                </div>
            </section>
            
            
        </main>
    )
}

export default Demo