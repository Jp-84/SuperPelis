const NavOnly = ({ setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles }) => {

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
    const handleCategories = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(true);
        setPremiers(false);
        setSeries(false);
        setLogin(false);
        setSignup(false);
        setUploadArticles(false);
        return;
    }
    const handlePremiers = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(true);
        setSeries(false);
        setLogin(false);
        setSignup(false);
        setUploadArticles(false);
        return;
    }
    const handleSeries = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(true);
        setLogin(false);
        setSignup(false);
        setUploadArticles(false);
        return;
    }
    const handleUploadArticle = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(false);
        setSignup(false);
        setUploadArticles(true);
        return;
    }
    return (
        <div className="nav-container">
            <ul id="navbar" className="navbar">
                <li onClick={handleHome}>
                    Home
                </li>
                <li onClick={handleCategories}>
                    Categories
                </li>
                <li onClick={handlePremiers}>
                    Premiers
                </li>
                <li onClick={handleSeries}>
                    Series
                </li>
                <li onClick={handleUploadArticle}>
                    Upload
                </li>
            </ul>
        </div>
    );
}

export default NavOnly;
