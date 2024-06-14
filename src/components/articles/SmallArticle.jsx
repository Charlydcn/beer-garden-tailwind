import PropTypes from 'prop-types'

function SmallArticle({ img, imgAlt = null, title, text, className = null}) {
    return (
        <article className={`group flex flex-col items-center w-80 max-w-[80vw] text-center ${className}`}>
            <div className="h-20 mb-4 relative">
                <img className="w-full h-full" src={img} alt={imgAlt} />
                <div className='group-hover:opacity-100 transition-opacity opacity-0 delay-150 duration-150 bg-gold w-full h-full absolute top-0 rounded-full mix-blend-darken'></div>
            </div>
            <h4 className='font-bold group-hover:text-gold transition-colors duration-500'>{title}</h4>
            <p className='opacity-50 raleway text-sm leading-6 font-semi-light'>{text}</p>
        </article>
    )
}

SmallArticle.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default SmallArticle;
