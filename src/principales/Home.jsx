import { useState, useEffect } from 'react'
import Article from "../componentes/article/Article";
import Categories from "./Categories"



const Home = () => {

    return (
        <>
            <div className="main-home">
                <div className="container-banner">
                    <img
                        id="arrow-left"
                        className="arrow"
                        src='../../public/img/arrowleft.png'
                        alt="arrow-left"
                    />
                    <img
                        id="img-banner"
                        className="img-banner"
                        src='../../public/img/banners/banners.jpg'
                    />
                    <img
                        id="arrow-right"
                        className="arrow"
                        src='../../public/img/arrowright.png'
                        alt="arrow-right"
                    />
                </div>
                <Categories />
                
            </div>

        </>
    );
}

export default Home;
