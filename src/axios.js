//* Default url of the backend

import axios from "axios";

const instance = axios.create({
  baseURL: "https://easy-rights.herokuapp.com/",
});

export default instance;
