import { environment } from "../../environments";

const Loader = () => {
    return (
        <div className='loader-container'>
            <img width='40' height='40' src={`${environment.cdnServerUrl}/assets/loader.svg`} alt='loader'/>
            <p className='text-center'>Loading results...</p>
        </div>
        
    )
}

export default Loader;