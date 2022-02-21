import PropTypes from 'prop-types';

const defaultButtonClasses = 'inline-block px-7 py-2 text-center rounded-lg border-2 font-semibold  hover:no-underline ease-in-out duration-100 ';

const Button = ({href, title, type, buttonColor}: ButtonProps) => {

    let buttonClasses = '';
    let textColor = '';

    if ( buttonColor === 'white' ) {
        textColor = 'royal-blue';
    } else if ( buttonColor === 'royal-blue' ) {
        textColor = 'white';
    }
    
    if ( type === 'primary' ) {
        buttonClasses = 'border-' + buttonColor + ' bg-' + buttonColor + ' hover:bg-transparent text-' + textColor + ' hover:text-' + buttonColor;
    } else if ( type === 'secondary' ) {
        buttonClasses = 'border-' + buttonColor + ' bg-transparent hover:bg-' + buttonColor + ' text-' + buttonColor + ' hover:text-' + textColor;
    }

    return <a href={href} className={defaultButtonClasses + buttonClasses}>{title}</a>
}
type ButtonProps = {
    href: string,
    title: string,
    type: string,
    buttonColor: string,
}

Button.propTypes = {
    href:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    type:PropTypes.string,
    buttonColor:PropTypes.string,
}

export default Button