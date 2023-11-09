import PropTypes from 'prop-types';

function CertInfo({ titulo,fecha }) {
    return (
        <>
            <h4 className="text-2">{titulo}</h4>
            <p className="text-3">{fecha}</p>
        </>
    )
}

CertInfo.propTypes = {
    titulo: PropTypes.string,
    fecha: PropTypes.string
};

export default CertInfo