import Header from "../../components/Header";


const HomePage = () => {


    return (
        <>
        <Header  />
        <div className="container">
            <div className="d-flex justify-content-center mb-3 mt-2">
                <h1>User List</h1>
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Vidya</td>
                            <td>vidya91</td>
                            <td>vidya91@gmail.com</td>
                            <td>32</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};
export default HomePage;