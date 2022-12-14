import logo from '/public/img/cine.jpg'

const LogoOnly = ({ setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles }) => {
    const handleHome = (e) => {
        e.preventDefault();
        setHome(true);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(false);
        setSignup(false);
        setUploadArticles(false);
        return;
    }
    return (
        <>
            
            <a 
            onClick={handleHome}
            id='Logo'>
                <img
                    id='image-logo'
                    className='image-logo'
                    src= { logo }
                    alt='logo' />
                <p className='title-logo'>
                    <span>S</span>uperPelis
                </p>
            </a>
        </>

    );
}

export default LogoOnly;