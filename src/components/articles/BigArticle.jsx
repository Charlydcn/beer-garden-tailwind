import PropTypes from 'prop-types';

export default function BigArticle({ className = null, title, smallText, text, btn}) {
    return (
        <article className={`flex flex-col text-center max-w-[55rem] items-center py-8 min-h-[50svh] justify-center w-11/12 mx-auto leading-7 h-full ${className} sm:w-3/4 sm:aspect-square lg:min-h-0`}>
            <h2 className='text-4xl mb-2 md:text-5xl'>{title}</h2>
            <p>
                <small className='italic times-new text-base md:text-mg'>
                    {smallText}
                </small>
            </p>
            <p className='opacity-50 raleway my-4 text-sm md:text-base'>
                {text}
            </p>
            {btn}
        </article>
    )
}

BigArticle.propTypes = {
    title: PropTypes.string.isRequired,     // title doit être une chaîne de caractères et est requis
    smallText: PropTypes.string.isRequired, // smallText doit être une chaîne de caractères et est requis
    text: PropTypes.string.isRequired,      // text doit être une chaîne de caractères et est requis
    btn: PropTypes.element.isRequired,      // btn doit être un élément React et est requis
    className: PropTypes.string,
};
