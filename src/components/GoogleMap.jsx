import PropTypes from 'prop-types';

const GoogleMap = ({ src, title = "Map", className = '' }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

GoogleMap.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string, // Ajoute la prop className pour des classes supplémentaires
};

export default GoogleMap;
