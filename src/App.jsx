import { useState } from 'react'
import Headers from './componentes/Headers'
import Home from './principales/Home'
import Categories from './principales/Categories'
import Premiers from './principales/Premiers'
import Series from './principales/Series'
import LogIn from './principales/LogIn'
import SignUp from './principales/SignUp'
import UploadArticles from './principales/UploadArticles'
import Footer from './componentes/Footer'

function App() {
	const [home, setHome] = useState(true);
	const [categories, setCategories] = useState(false);
	const [premiers, setPremiers] = useState(false);
	const [series, setSeries] = useState(false);
	const [login, setLogin] = useState(false);
	const [signup, setSignup] = useState(false);
	const [uploadArticles, setUploadArticles] = useState(false);

	// Esta funcion deshabilita el boton derecho del Mouse (Nota = Es bueno colocarla mas escondida)
	document.oncontextmenu = function () {
		return false
	}


	return (
		<>
			<Headers
				setHome={setHome}
				setCategories={setCategories}
				setPremiers={setPremiers}
				setSeries={setSeries}
				setLogin={setLogin}
				setSignup={setSignup}
				setUploadArticles={setUploadArticles}
			/>
			{home ? (<Home />) :
				(categories && (<Categories
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}
				/>)) ||
				(premiers && (<Premiers
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}

				/>)) ||
				(series && (<Series
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}

				/>)) ||
				(login && (<LogIn
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}

				/>)) ||
				(signup && (<SignUp
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}
				/>)) ||
				(uploadArticles && (<UploadArticles
					setHome={setHome}
					setCategories={setCategories}
					setPremiers={setPremiers}
					setSeries={setSeries}
					setLogin={setLogin}
					setSignup={setSignup}
					setUploadArticles={setUploadArticles}
				/>))
			}
			<Footer
				setHome={setHome}
				setCategories={setCategories}
				setPremiers={setPremiers}
				setSeries={setSeries}
				setLogin={setLogin}
				setSignup={setSignup}
				setUploadArticles={setUploadArticles}
			/>
		</>
	)
}

export default App
