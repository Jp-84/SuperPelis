import React from 'react';


const Categorie = ( {src, name} ) => {

    return (
        <article className="categories">
            <img
                src={ src }
                className="img"
                alt={name}
            />
            <p
                className="text">
                {name}
            </p>
        </article>
    );
}

export default Categorie;
