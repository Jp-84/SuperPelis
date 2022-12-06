import { useState } from 'react';
import LogoOnly from './headers/compHeaderOnly/LogoOnly';
import SearchOnly from './headers/compHeaderOnly/SearchOnly';
import LogInSignUpOnly from './headers/compHeaderOnly/LogInSignUpOnly';
import NavOnly from './headers/compHeaderOnly/NavOnly';


const Headers = ({ setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles }) => {

    // const [buscar, setBuscar] = useState('');

    return (
        <div id='container-logo' className='container-logo'>
            <LogoOnly
                setHome={setHome}
				setCategories={setCategories}
				setPremiers={setPremiers}
				setSeries={setSeries}
				setLogin={setLogin}
				setSignup={setSignup}
				setUploadArticles={setUploadArticles}
            />
            <SearchOnly />
            <LogInSignUpOnly
                setHome={setHome}
				setCategories={setCategories}
				setPremiers={setPremiers}
				setSeries={setSeries}
				setLogin={setLogin}
				setSignup={setSignup}
				setUploadArticles={setUploadArticles}
            />
            <NavOnly
                setHome={setHome}
				setCategories={setCategories}
				setPremiers={setPremiers}
				setSeries={setSeries}
				setLogin={setLogin}
				setSignup={setSignup}
				setUploadArticles={setUploadArticles}
            />
        </div>
    );
}

export default Headers;
