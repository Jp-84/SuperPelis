const LogInSignUpOnly = ( {setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles} ) => {
    
    const handleLogin = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(true);
        setSignup(false);
        setUploadArticles(false);
        return;
    }
    const handleSignup = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(false);
        setSignup(true);
        setUploadArticles(false);
        return;
    }

    return (

        <div className="container-login">
            <button 
            onClick={handleLogin}
            id="login" className="button-login">
                Log in
            </button>
            <button 
            onClick={handleSignup}
            id="register" className="button-signup">
                Sign up
            </button>
        </div>

    );
};

export default LogInSignUpOnly;