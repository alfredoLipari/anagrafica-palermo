//* Default url of the backend

import axios from "axios";

const instance = axios.create({
  baseURL: "https://easyrights-backend.comune.palermo.it/",
});

export default instance;
