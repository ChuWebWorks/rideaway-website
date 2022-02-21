import PropTypes from 'prop-types';

const outerBgCircleClasses = 'bg-outer-circle rounded-full absolute grid content-center z-30 md:-z-20 ';
const innerBgCircleClasses = 'bg-inner-circle rounded-full inline-block mx-auto ';

const BgCircle = ( {circleColor, position, opacity}: BgCircleProps ) => {

    let innerCircleColor = '';

    if ( circleColor === 'white' ) {
        innerCircleColor = 'royal-blue';
    } else if ( circleColor === 'royal-blue' ) {
        innerCircleColor = 'white';
    }

    return <div className={outerBgCircleClasses + position + ' bg-' + circleColor + ' opacity-' + opacity}>
                <div className={innerBgCircleClasses + ' bg-' + innerCircleColor }></div>
            </div>
}

type BgCircleProps = {
    circleColor: string,
    position: string,
    opacity: string,
}

BgCircle.propTypes = {
    circleColor:PropTypes.string.isRequired,
    position:PropTypes.string,
    opacity:PropTypes.string,
}

export default BgCircle