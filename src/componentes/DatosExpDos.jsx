import PropTypes from 'prop-types';

function DatosExpDos({ text3, text2, descri }) {
    return (
        <div className="content">
        <span className="text-3">{text3}</span>
        <h3 className="text-2">{text2}</h3>
        <p className="text-2">{descri}</p>
      </div>
    )
}

DatosExpDos.propTypes = {
    text3: PropTypes.string,
    text2: PropTypes.string,
    descri: PropTypes.string,
};

export default DatosExpDos;
