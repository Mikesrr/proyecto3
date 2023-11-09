import PropTypes from 'prop-types';

function CertImg({img}){
    return (
        <div className="certificate">
            <div className="image" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    )
}

CertImg.propTypes = {
    img: PropTypes.string,
};

export default CertImg