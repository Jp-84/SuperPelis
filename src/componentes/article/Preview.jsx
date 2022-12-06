import { DefaultPlayer as Video } from 'react-html5video';
import { useEffect } from 'react';
import 'react-html5video/dist/styles.css';
import VideoArticle from './VideoArticle';
import VideoTrailer from './VideoTrailer';
import ImagesArticle from './ImagesArticle';
import Article from './Article'

const Preview = ({ articles, setArticle, eliminarArticle }) => {


    return (
        <div className="preview">
            {articles && articles.length ? (
                <>
                    {articles.map(article => (
                        <div
                            className='container-preview'
                            key={article.id}
                            setArticle={setArticle}
                            eliminarArticle={eliminarArticle}
                        >
                            <h2>Preview</h2>
                            <div className='video-movie'>
                                <VideoArticle
                                    article={article}
                                />
                            </div>
                            <div className='video-trailer'>
                                <VideoTrailer
                                    article={article}
                                />
                            </div>
                            <div className='photographs button-img'>
                                <ImagesArticle
                                    article={article}
                                />
                            </div>
                            <Article
                                article={article}
                            />
                            <div className='button'>
                                <button
                                    onClick={() => setArticle(article)}
                                    type='button'
                                    className='input-button editar'>
                                    Editar
                                </button>
                                <button
                                    onClick={() => {
                                    const respuesta = confirm('Do you want to delete this Article')
                                    respuesta && 
                                    eliminarArticle(article.id)
                                    setArticle({});}}
                                    type='button'
                                    className='input-button eliminar'>
                                    ELiminar
                                </button>

                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className='container-preview'>
                        <h2>Enter an Article</h2>
                    </div>
                </>
            )}


        </div>
    );
}

export default Preview;