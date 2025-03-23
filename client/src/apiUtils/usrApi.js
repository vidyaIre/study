import axiosInstance from "../config/axiosConfig";

export const userLogin = async(payload) => {
    const {email, password } = payload;
    if (email && password){
        const result = await axiosInstance.post("userLogin", payload);
        console.log("result from api call", result);
        return {
            success: true,
            status: 200,
            message: "User logged in successfully",
            data: result.data
        }

    } else {
        return {
            success: false,
            status: 400,
            message: "Please enter email and password"
        }
    }
    
}