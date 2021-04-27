import PropTypes from 'prop-types';

const Card = ({title, badgeComponent, fullWidth, children}) => {
    return (
        <div className={'card' + (fullWidth ? ' w-100' : '')}>
            {
                title &&  <div className='card-header'>
                { title && <h4 className="card-title">{title}</h4>}
                {badgeComponent ? badgeComponent : null }
            </div>
            }
           
            
            <div className='card-body'>
                {children}
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: '',
    hasBadge: false,
}

Card.propTypes = {
    title: PropTypes.string,
    hasBadge: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Card;