import { useState } from "react";
import Categorie from "../componentes/article/Categorie";

import action from '../img/categories/action.jpg'
import adventure from '../img/categories/adventure.jpg'
import comedy from '../img/categories/comedy.jpg'
import crime from '../img/categories/crime.jpg'
import documentaryfilm from '../img/categories/documentaryfilm.jpg'
import drama from '../img/categories/drama.jpg'
import fancy from '../img/categories/fancy.jpg'
import history from '../img/categories/history.jpg'
import lively from '../img/categories/lively.jpg'
import romance from '../img/categories/romance.jpg'
import sciencefiction from '../img/categories/sciencefiction.jpg'
import suspense from '../img/categories/suspense.jpg'
import terror from '../img/categories/terror.jpg'
import western from '../img/categories/western.jpg'
import warlike from '../img/categories/warlike.jpg'

const Home = () => {

    return (
        <>
            <div className="container-main">
                <div className="main-categories">
                    <Categorie
                        src={action}
                        name="Action"
                    />
                    <Categorie
                        src={adventure}
                        name="Adventure"
                    />
                    <Categorie
                        src={comedy}
                        name="Comedy"
                    />
                    <Categorie
                        src={crime}
                        name="Crime"
                    />
                    <Categorie
                        src={documentaryfilm}
                        name="Documentary Film"
                    />
                    <Categorie
                        src={drama}
                        name="Drama"
                    />
                    <Categorie
                        src={fancy}
                        name="Fancy"
                    />
                    <Categorie
                        src={history}
                        name="History"
                    />
                    <Categorie
                        src={lively}
                        name="Lively"
                    />
                    <Categorie
                        src={romance}
                        name="Romance"
                    />
                    <Categorie
                        src={sciencefiction}
                        name="Science Fiction"
                    />
                    <Categorie
                        src={suspense}
                        name="Suspense"
                    />
                    <Categorie
                        src={terror}
                        name="Terror"
                    />
                    <Categorie
                        src={western}
                        name="Western"
                    />
                    <Categorie
                        src={warlike}
                        name="Warlike"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;