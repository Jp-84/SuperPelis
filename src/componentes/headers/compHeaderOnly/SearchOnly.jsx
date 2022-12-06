const SearchOnly = () => {
    return (
        <form id="form-search" className="form-search">
            <label>
                <img
                    id="image-search"
                    className="image-search"
                    src='/src/assets/img/search.png'
                />
            </label>

            <input
                id="input-search"
                type="search"
                className="input-search"
                placeholder="Search"
            // value={buscar}
            // onChange={ (e) => {setBuscar(e.target.value)} }
            />
        </form>
    );
};

export default SearchOnly;
