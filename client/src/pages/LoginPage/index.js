import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValid = () => {
        if (email && password && email.trim().length > 0 && password.trim().length > 0) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);

        } else {
            //alert('Please enter email and password');
            toast('Email is not in valid format');
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email.trim();
        password.trim();
        if (isValid()) {
            console.log(email, password);
        } else {
            //alert('Please enter email and password');
            toast('Please enter email and password');
        }
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example13">Email address</label>
                                <input
                                    type="text"
                                    value={email}
                                    id="form1Example13"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />

                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example23">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    id="form1Example23"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control form-control-lg"
                                    placeholder="Enter password" />

                            </div>

                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    onClick={handleSubmit}
                                    className="btn btn-primary btn-lg btn-block"
                                >Login</button>
                            </div>

                            <div className="d-flex justify-content-around text-lg-start  mt-4 pt-2 align-items-center mb-4">
                                <a href="#!">Forgot password?</a>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>

                                <a href="#!">Register</a>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
