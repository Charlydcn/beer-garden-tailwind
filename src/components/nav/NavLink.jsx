import PropTypes from 'prop-types';

function NavLink({ href, text }) {
  return (
    <li className='hover:text-gray-300'>
        <a href={href}>{text}</a>
    </li>
  );
}

// PropTypes vérifie que les props passés sont du bon type, ça génère des avertissements en dev en cas d'erreur
NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node, // Pour accepter les éléments React
    ]).isRequired,
};

export default NavLink;
