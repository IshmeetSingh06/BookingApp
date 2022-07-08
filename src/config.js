import axios from "axios";

export const axiosInstance=axios.create(
    {baseURL: "https://backend-book-app-kal.herokuapp.com/api/"}
)