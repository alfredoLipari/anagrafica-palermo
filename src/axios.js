//* Default url of the backend

import axios from "axios";

const instance = axios.create({
  baseURL: "https://02a8-78-40-163-30.ngrok.io/",
});

export default instance;
