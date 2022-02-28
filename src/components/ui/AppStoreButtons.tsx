import GooglePlayStoreImage from '../../images/Google Play Store.png';
import AppleStoreImage from '../../images/Apple Store.png';

const AppStoreButtons = () => {
    return <>
        <a href='https://www.apple.com/app-store/' target='_blank' rel='noreferrer' className='inline-block mx-2 md:px-0 md:mr-2inline-block mx-2 md:mx-0 md:mr-4 md:px-0 md:mr-2 md:ml-0 shadow-2xl md:ml-0 shadow-2xl'><img alt='' className='' src={AppleStoreImage} /></a>
        <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank' rel='noreferrer' className='inline-block shadow-2xl'><img alt='' className='' src={GooglePlayStoreImage} /></a>
    </>
}

export default AppStoreButtons