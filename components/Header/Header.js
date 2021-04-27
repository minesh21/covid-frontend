import { environment } from "../../environments"
const Header = ({toggle, isLoading}) => {
    const toggleNavbar = (evt) => {
        evt.preventDefault();
        toggle(true);
    }
    return (
        <div className='navbar'>
            <div className='navbar-inner'>
            <img width='150' height='90' src={`${environment.cdnServerUrl}/assets/covid_tracker_logo.svg`} alt="Covid Tracker Logo" />
            {
                !isLoading ? 
                <ul className="navbar-nav"> 
                    <li className='navbar-item'>
                        <a href=':javascript' className='navbar-toggle' 
                        onClick={(evt) => toggleNavbar(evt)}>
                            <i className="far fa-bars"></i>
                        </a>
                    </li>
                </ul>
                : null
            }
           
            </div>
            
        </div>
    )
}


export default Header;