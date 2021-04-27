import Badge from '../Badge/Badge';
import { Constants } from '../../constants';

const Navbar = ({isOpen, cases, close}) => {
    
    return (
        <div className={`side-navbar ${isOpen ? 'slideIn' : 'slideOut'}`}>
            <div className='toolbar'>
                <h2 className="toolbar-text">Select province</h2>
                <div className='btnClose' onClick={() => close(false)}>
                    <i className='far fa-times'></i>
                    <span>close</span>
                </div>
            </div>
            <ul className='navbar-nav '>
                {
                    cases && cases.length > 0 ?
                    Constants.provinces.map((province, index) => {
                        const provCase = cases.find(g => g._id === province.slug);
                        return (
                            <li key={index} className='navbar-item'>
                                <a  className='navbar-link' href={`/${province.short}`}>
                                    {province.long}
                                        {
                                            cases && cases.length > 0 ?
                                                <Badge value={provCase.cumulative_cases.toLocaleString()}/>
                                            : null
                                        }
                                    
                                   
                                </a>
                            </li>
                        )
                    }) : null
                }
            </ul>

            
           
        </div>
    )
}

export default Navbar;