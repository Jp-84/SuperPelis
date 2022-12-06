import React from 'react';

const Categorie = ( {src, name}  ) => {
    
    return (
        <article className="categories">
            <img
                src={`/src/assets/img/categories/${ src }.jpg`}
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