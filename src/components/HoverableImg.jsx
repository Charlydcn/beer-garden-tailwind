import PropTypes from 'prop-types';

export default function HoverableImg({ src, alt = "", className = "" }) {
    return (
        <div className={`group overflow-hidden relative cursor-pointer ${className}`}>
            <div className='group-hover:opacity-100 transition-all duration-500 opacity-0 raleway bg-gold/80 absolute w-full h-full z-10 flex items-center justify-center text-slate-50 text-9xl font-extralight'>
                <p className='group-hover:rotate-180 transition-all duration-700 ease-in-out'>+</p>
            </div>
            <img className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-125" src={src} alt={alt} />
        </div>
    );
}

HoverableImg.propTypes = {
    src: PropTypes.string.isRequired,  // src doit être une chaîne de caractères et est requis
    alt: PropTypes.string,             // alt doit être une chaîne de caractères, mais n'est pas requis
    className: PropTypes.string,
};
