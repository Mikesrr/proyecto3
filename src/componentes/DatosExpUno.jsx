import PropTypes from 'prop-types';

function DatosExpUno({ imgen, fecha, titulo }) {
    return (
        <div className="title">
            <img src={imgen} alt="Adidas" />
            <span className="text-3">{fecha}</span>
            <h3 className="text-2">{titulo}</h3>
        </div>
    )
}

DatosExpUno.propTypes = {
    imgen: PropTypes.string,
    fecha: PropTypes.string,
    titulo: PropTypes.string,
};

export default DatosExpUno;
