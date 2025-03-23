import axiosInstance from "../config/axiosConfig";

export const userLogin = async (payload) => {
    const { email, password } = payload;
    //console.log(email, password);
    if (email && password) {
        //console.log("Payload is ", payload);
        const result = await axiosInstance.post("/userLogin", payload).catch((error) => console.log("error is:", error));
        //console.log("response is:", result);
        return result?.data;
    } else {
        return {
            success: false,
            status: 400,
            message: "Please enter email and password"
        }
    }

}