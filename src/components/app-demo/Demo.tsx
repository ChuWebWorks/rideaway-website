import iPhone from '../../images/iphone 13.png';
import Map from './Map';

const Demo = () => {
    return (
        <main className='min-h-screen h-full mx-auto pb-20 bg-porcelain'>
            <section className='text-center py-5'>
                <h1 className='m-0'>App Demo</h1>
            </section>
            <section className='app-demo-container shadow-2xl border-2 rounded-3xl overflow-hidden mx-auto'>
                
                <div className='app-main-container min-h-full grid relative'>
                    <Map />
                </div>

            </section>
            
            
        </main>
    )
}

export default Demo