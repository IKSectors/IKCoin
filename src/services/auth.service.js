import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = ( email, userName, fullName, password, phone ) => {
  return axios.post(API_URL + "signup", {
    email, 
    userName, 
    fullName, 
    password,
    phone,
  });
};

const login = (userName, password) => {
  return axios
    .post(API_URL + "signin", {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
