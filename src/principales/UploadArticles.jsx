import { useState, useEffect } from "react";
import Preview from "../componentes/article/Preview";
import FromUploadArticle from "../componentes/article/FromUploadArticle";


const UploadArticle = () => {

    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});
    
    useEffect(() =>{
        const obtenerLS = () =>{
            const articlesLS = JSON.parse(localStorage.getItem('articles'));
            setArticles(articlesLS);
        }
        obtenerLS();
    },[]);

    useEffect(() =>{
        localStorage.setItem('articles', JSON.stringify( articles ));
    },[articles]);

    const eliminarArticle = id => {
        const articlesActualizados = articles.filter( article => article.id !== id)
        setArticles(articlesActualizados)
    }
    
    return (
        <>
            <div className='container-main'>
                <div className="container-upload">
                    <FromUploadArticle  // Formulario
                        articles={articles}
                        setArticles={setArticles}
                        article={article}
                        setArticle={setArticle}
                    />
                    <Preview //Lista Pacientes 
                        articles={articles}
                        setArticle={setArticle}
                        eliminarArticle={eliminarArticle}
                    />
                </div>
            </div>
        </>
    );
}

export default UploadArticle;
