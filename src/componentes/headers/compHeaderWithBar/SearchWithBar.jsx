import LogoOnly from "../CompHeaderOnly/LogoOnly";

const SearchWithBar = () => {
    return (
        <div id='container-logo' className='container-logo'>

            <LogoOnly />
            
            <form id="form-search" className="form-search">
                <label>
                    <img
                        id="image-search"
                        className="image-search"
                        src="/public/img/search.png"
                    />
                </label>

                <input
                    id="input-search"
                    type="text"
                    className="input-search"
                    placeholder="Search"
                // value={buscar}
                // onChange={ (e) => {setBuscar(e.target.value)} }
                />
            </form>
        </div>
    );
};

export default SearchWithBar;