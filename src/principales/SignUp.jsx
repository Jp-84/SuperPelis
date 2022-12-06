import { useState, useEffect } from "react";
import Mistake from "../componentes/from/Mistake";
import Register from "../componentes/from/Register";


const SignUp = ({ setHome, setCategories, setPremiers, setSeries, setLogin, setSignup, setUploadArticles }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [conditions, setConditions] = useState(false);

    const [error, setError] = useState(false);


    ////////////////////////////////////////////////////////
    // ESTAS FUNCIONES TIENEN QUE SER 1 SOLA
    const handleOnChangeT = () => {
        setTerms(!terms)
    }
    const handleOnChangeC = () => {
        setConditions(!conditions)
    }
    ////////////////////////////////////////////////////////

    //Funcion para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        //Valida que los campos no esten vacios
        if ([name, age, email, password, repeatPassword].includes('') || (terms === false) || (conditions === false)) {
            setError(true)
            return;
        }
        setError(false)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setHome(false);
        setCategories(false);
        setPremiers(false);
        setSeries(false);
        setLogin(true);
        setSignup(false);
        setUploadArticles(false);
        return;
    }

    return (
        <>
            <div className="container-main session">
                <div id="container-from-signup" className="container-from">
                    <form
                        onSubmit={handleSubmit}
                        id="from-signup"
                        className="form">
                        <label
                            id='label-name-signup'
                            className='label'
                            htmlFor='input-name-signup'>
                            Name
                        </label>
                        <input
                            id='input-name-signup'
                            type='text'
                            className='input'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label
                            id='label-date-signup'
                            className='label'
                            htmlFor='input-date-signup'>
                            Date of Birth
                        </label>
                        <input
                            id='input-date-signup'
                            type="date"
                            className='input'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <label
                            id='label-email-signup'
                            className='label'
                            htmlFor='input-email-signup'>
                            E-mail
                        </label>
                        <input
                            id='input-email-signup'
                            type='email'
                            className='input'
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            id='label-password-signup'
                            className='label'
                            htmlFor='input-password-signup'>
                            Password
                        </label>
                        <input
                            id='input-password-signup'
                            type='text'
                            className='input'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                            id='label-repeatpassword-signup'
                            className='label'
                            htmlFor='input-repeatpassword-signup'>
                            Repeat password
                        </label>
                        <input
                            id='input-repeatpassword-signup'
                            type='text'
                            className='input'
                            placeholder='Repeat password'
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <div className="container-checkbox">
                            <p>I have read and accept :</p>
                            <div className="checkbox">
                                <input
                                    id='checkbox-terms-conditions'
                                    type='checkbox'
                                    className='input-checkbox'
                                    checked={terms}
                                    onChange={handleOnChangeT}
                                />
                                <label className="document">
                                    <p>Terms & Conditions</p>
                                </label>
                            </div>
                            <div className="checkbox">
                                <input
                                    id='checkbox-privacy-policy'
                                    type='checkbox'
                                    className='input-checkbox'
                                    checked={conditions}
                                    onChange={handleOnChangeC}
                                />
                                <label className="document">
                                    <p>Privacy Policy</p>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input
                                type="submit"
                                className="input-button"
                                value="Sign Up"
                            />
                            {error && <Mistake><p>All fields are required</p></Mistake>}

                        </div>
                    </form>
                    <Register>
                        <p>Already have an account?
                            <span
                                onClick={handleLogin}>
                                Log in
                                </span></p>
                    </Register>

                </div>
            </div>
        </>
    );
}

export default SignUp;
