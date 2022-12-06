import { useState, useEffect } from "react";
import Mistake from "../from/Mistake";


const FromUploadArticle = ({ articles, setArticles, article, setArticle }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [tags, setTags] = useState('');
    const [actors, setActors] = useState('');
    const [video, setVideo] = useState('');
    const [trailer, setTrailer] = useState('');
    const [photographs, setPhotographs] = useState('');

    const [error, setError] = useState(false);
    
    useEffect(()=>{
        if(Object.keys(article).length > 0){
            setTitle(article.title)
            setDate(article.date)
            setDescription(article.description)
            setCategories(article.categories)
            setTags(article.tags)
            setActors(article.actors)
            setVideo(article.video)
            setTrailer(article.trailer)
            setPhotographs(article.photographs)
        }
    }, [article])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha
    }

    const uploadVideo = (selectorFiles) => {
        if (selectorFiles) {
            setVideo(selectorFiles[0])
        } else {
            setVideo('');
        }
    }
    const uploadTrailer = (selectorFiles) => {
        if (selectorFiles) {
            setTrailer(selectorFiles[0])
        } else {
            setTrailer('');
        }
    }

    // const uploadPhographs = (e) => {
    //     const { files } = e.target;  ===>>> Aqui esta algo mal. 
    //     let images = [];
    //     selectorFiles = [...[...files]];
    //     selectorFiles.forEach(i => images.push(URL.createObjectURL(i)))
    //     setPhotographs(images)
    // } 

    function uploadPhotographs(e) {
        const { files } = e.target;
        let images = [];
        const selectorFiles = [...[...files]];

        if (selectorFiles) {
            selectorFiles.forEach(i => images.push(URL.createObjectURL(i)))
            setPhotographs(images);
        } else {
            setPhotographs('');
        }

    }

    //Funcion para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        //Valida que los campos no esten vacios
        if ([title, date, description, categories, tags, actors, video, trailer, photographs].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        //Objeto del articulo
        const objArticle = {
            title,
            date,
            description,
            categories,
            tags,
            actors,
            video,
            trailer,
            photographs
        }
        if (article.id) {
            //Editando registro
            objArticle.id = article.id
            const articlesActualizados = articles.map( articleState => articleState.id === article.id ? objArticle : articleState)
            setArticles(articlesActualizados)
            setArticle({});
        }else{
            //Nuevo registro
            // setArticles([objArticle]);
            // En el caso que desee colocar articulos uno y luego el otro en orden de escritura:
            objArticle.id = generarId();
            setArticles([objArticle, ...articles]);
        }

        // Reiniciar el Formulario
        setTitle('');
        setDate('');
        setDescription('');
        setCategories('');
        setTags('');
        setActors('');
        setVideo('');
        setTrailer('');
        setPhotographs('');

    }

    return (
        <div id="container-from-uploadarticle" className="container-from">
            <form
                onSubmit={handleSubmit}
                id="from-uploadarticle"
                className="form">
                <label
                    id='label-title-uploadarticle'
                    className='label'
                    htmlFor='input-title-uploadarticle'>
                    Title
                </label>
                <input
                    id='input-title-uploadarticle'
                    type='text'
                    className='input'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label
                    id='label-date-uploadarticle'
                    className='label'
                    htmlFor='input-date-uploadarticle'>
                    Date
                </label>
                <input
                    id='input-date-uploadarticle'
                    type="date"
                    className='input'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label
                    id='label-description-uploadarticle'
                    className='label'
                    htmlFor='textarea-description-uploadarticle'>
                    Description
                </label>
                <textarea
                    id='input-description-uploadarticle'
                    className='input'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label
                    id='label-categories-uploadarticle'
                    className='label'
                    htmlFor='input-categories-uploadarticle'>
                    Categories
                </label>
                <input
                    id='input-email-uploadarticle'
                    type='text'
                    className='input'
                    placeholder='Categories'
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                />
                <label
                    id='label-tags-uploadarticle'
                    className='label'
                    htmlFor='input-tags-uploadarticle'>
                    Tags
                </label>
                <input
                    id='input-tags-uploadarticle'
                    type='text'
                    className='input'
                    placeholder='Tags'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <label
                    id='label-actors-uploadarticle'
                    className='label'
                    htmlFor='input-actors-uploadarticle'>
                    Actors
                </label>
                <input
                    id='input-actors-uploadarticle'
                    type='text'
                    className='input'
                    placeholder='Actors'
                    value={actors}
                    onChange={(e) => setActors(e.target.value)}
                />
                <div className="container-file">
                    <p>Select the files to upload :</p>
                    <div className="file">
                        <label for='file-video' className="label-file video">
                            Video
                        </label>
                        {video && <p>{video.name}</p>}
                        <input
                            id='file-video'
                            type='file'
                            accept=".mp4"
                            className='input-file'
                            onChange={(e) => uploadVideo(e.target.files)}
                        />
                    </div>
                    <div className="file">
                        <label for='file-trailer' className="label-file trailer">
                            Trailer
                        </label>
                        {trailer && <p>{trailer.name}</p>}
                        <input
                            id='file-trailer'
                            type='file'
                            accept=".mp4"
                            className='input-file'
                            onChange={(e) => uploadTrailer(e.target.files)}
                        />
                    </div>
                    <div className="file">
                        <label for='file-photographs' className="label-file photographs">
                            Photographs
                        </label>
                        {photographs && <p>{photographs.length} Images</p>}
                        <input
                            id='file-photographs'
                            type='file'
                            multiple
                            accept=".jpg, .png"
                            className='input-file'
                            onChange={uploadPhotographs}
                        />
                    </div>
                </div>
                <div className="button">
                    <input
                        type="submit"
                        className="input-button"
                        value={article.id ? "Edit Article" : "Preview"}
                    />
                    {error && <Mistake><p>All fields are required</p></Mistake>}

                </div>
            </form>
        </div>
    );
}

export default FromUploadArticle;
