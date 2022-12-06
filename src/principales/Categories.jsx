import { useState } from "react";
import Categorie from "../componentes/article/Categorie";

const Home = () => {

    return (
        <>
            <div className="container-main">
                <div className="main-categories">
                    <Categorie
                        src="action"
                        name="Action"
                    />
                    <Categorie
                        src="adventure"
                        name="Adventure"
                    />
                    <Categorie
                        src="comedy"
                        name="Comedy"
                    />
                    <Categorie
                        src="crime"
                        name="Crime"
                    />
                    <Categorie
                        src="documentaryfilm"
                        name="Documentary Film"
                    />
                    <Categorie
                        src="drama"
                        name="Drama"
                    />
                    <Categorie
                        src="fancy"
                        name="Fancy"
                    />
                    <Categorie
                        src="history"
                        name="History"
                    />
                    <Categorie
                        src="lively"
                        name="Lively"
                    />
                    <Categorie
                        src="romance"
                        name="Romance"
                    />
                    <Categorie
                        src="sciencefiction"
                        name="Science Fiction"
                    />
                    <Categorie
                        src="suspense"
                        name="Suspense"
                    />
                    <Categorie
                        src="terror"
                        name="Terror"
                    />
                    <Categorie
                        src="western"
                        name="Western"
                    />
                    <Categorie
                        src="warlike"
                        name="Warlike"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;