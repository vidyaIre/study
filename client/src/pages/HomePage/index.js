import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import { getUser } from "../../apiUtils/usrApi";


const HomePage = () => {
    const [userList, setUserList] = useState([]);
    async function getUserList() {
        try {
            const userData = await getUser();
            console.log("userData is:", userData);
            setUserList(userData?.data);
        }
        catch (error) {
            toast.error(error?.message ?? "Something went wrong");
        }
    }


    useEffect(() => {
        getUserList();

    }, []);

    return (
        <>
            <Header />
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
                                <th>Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList && userList?.length > 0
                                    ? userList.map((user) => (
                                        < tr >
                                            <td>{user?.name}</td>
                                            <td>{user?.userName}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.phone}</td>
                                        </tr>

                                    )):<></>
                                }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};
export default HomePage;