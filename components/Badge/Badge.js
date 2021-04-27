import PropTypes from 'prop-types';
const Badge = ({value, color}) => {
    return (
        <span className={`badge ${color ? color : ''}`}>
            { value }
        </span>
    )
}

Badge.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
}

export default Badge;