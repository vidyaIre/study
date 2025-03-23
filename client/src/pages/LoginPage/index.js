

const LoginPage = () => {

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" for="form1Example13">Email address</label>
                                <input type="email" id="form1Example13" className="form-control form-control-lg" />

                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" for="form1Example23">Password</label>
                                <input type="password" id="form1Example23" className="form-control form-control-lg" />

                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Login</button>
                            </div>

                            <div className="d-flex justify-content-around text-lg-start  mt-4 pt-2 align-items-center mb-4">
                            <a href="#!">Forgot password?</a>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                    <label className="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                                
                                <a href="#!">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
