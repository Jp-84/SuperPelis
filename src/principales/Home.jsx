import { useState, useEffect } from 'react'
import Article from "../componentes/article/Article";
import Categories from "./Categories"
import arrowleft from '/public/img/arrowleft.png'
import banner from '/public/img/banners/banners.jpg'
import arrowright from '/public/img/arrowright.png'


const Home = () => {

    return (
        <>
            <div className="main-home">
                <div className="container-banner">
                    <img
                        id="arrow-left"
                        className="arrow"
                        src={ arrowleft }
                        alt="arrow-left"
                    />
                    <img
                        id="img-banner"
                        className="img-banner"
                        src={ banner}
                    />
                    <img
                        id="arrow-right"
                        className="arrow"
                        src={ arrowright }
                        alt="arrow-right"
                    />
                </div>
                <Categories />
                
            </div>

        </>
    );
}

export default Home;
