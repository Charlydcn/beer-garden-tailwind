import PropTypes from 'prop-types';

export default function Button({text}) {
    return (
        <button className='bg-gold text-gray-50 px-10 py-2 rounded hover:bg-gold/80 transition-colors'>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
