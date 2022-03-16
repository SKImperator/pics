import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID YwQswl0jeN_7KaqbzvsQ6kuvs7g-G4sGYErpsoQyYK0"
    }
});