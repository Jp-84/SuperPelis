import LogoOnly from "../CompHeaderOnly/LogoOnly";


const LogInSignUpWithBar = () => {
    return (

        <div id='container-logo' className='container-logo'>
            <LogoOnly />
            
            <div className="container-login">
                <button id="login" className="button-login">
                    Log in
                </button>
                <button id="register" className="button-signup">
                    Sign up
                </button>
            </div>
        </div>
        
    );
};

export default LogInSignUpWithBar;