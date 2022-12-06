// import VideoArticle from "./VideoArticle";

//Articulos es Pacientes

const Article = ({ article }) => {
    const { title, date, description, categories, tags, actors } = article
    return (
        <div className="description" >
            <h3>{title} <span></span></h3>
            <p className="subtitle">Date: <span>{date}</span></p>
            <p className="subtitle">Description: <br />
                <span>{description}</span></p>
            <p className="subtitle">Categorias: <span>{categories}</span></p>
            <p className="subtitle">Tags: <span>{tags}</span></p>
            <p className="subtitle">Actors: <span>{actors}</span></p>
        </div>
    );
}

export default Article;
