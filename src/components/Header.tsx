import Nav from './Nav';
import Logo from '../images/logoipsum-logo-33.svg';

const Header = ( props: HeaderProps ) => {
    return (
        <header>
            <img src={ Logo } alt={ props.title } />
            <Nav />
        </header>
    )
}

type HeaderProps = {
    title: string,
}

export default Header