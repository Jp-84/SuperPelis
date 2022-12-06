import { useState, useEffect } from "react";
import Mistake from "../componentes/from/Mistake";
import Register from "../componentes/from/Register";

const LogIn = ( {setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //Funcion para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        //Valida que los campos no esten vacios
        if ([email, password].includes('')) {
            setError(true)
            return;
        }
        setError(false)
    }
    const handleSignup = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(false);
        setSignup(true);
        setUploadArticles(false);
        return;
    }

    return (
        <>
            <div className="container-main session">
                <div id="container-from-login" className="container-from">
                    <form
                        onSubmit={handleSubmit}
                        id="from-login"
                        className="form">
                        {error && <Mistake><p>All fields are required</p></Mistake>}
                        <label
                            id='label-email-login'
                            className='label'
                            htmlFor='input-email-login'>
                            E-mail
                        </label>
                        <input
                            id='input-email-login'
                            type='email'
                            className='input'
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            id='label-password-login'
                            className='label'
                            htmlFor='input-password-login'>
                            Password
                        </label>
                        <input
                            id='input-password-login'
                            type='text'
                            className='input'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="recover-password">
                            I forgot my password
                        </p>
                        <div className="button">
                            <input
                                type="submit"
                                className="input-button"
                                value="Log In"
                            />
                        </div>
                    </form>
                    <Register>
                        <p>No account yet?
                            <span
                                onClick={handleSignup}>
                                Sign Up
                            </span></p>
                    </Register>
                </div>
            </div>
        </>
    );
}

export default LogIn;
