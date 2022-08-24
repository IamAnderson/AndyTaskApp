import axios from "axios";

const API_URI = "http://localhost:5000/user/"


//register user

const register = async (userData) => {
    const response = await axios.post(API_URI, userData)

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data)) 
    }

    return response.data
}


//login user

const login = async (userData) => {
    const response = await axios.post(API_URI + "login", userData)

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data)) 
    }

    return response.data
}


//logout user

const logout = () => {
    localStorage.removeItem("user")
}


const authService = {
    register,
    login,
    logout,
}

export default authService;
