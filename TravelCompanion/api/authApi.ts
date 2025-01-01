import axios from "axios";
import {registrationPayload} from "@/api/userTypes";

export const userRegistration = (payload: registrationPayload) => {
    return axios.post("http://localhost:3000/api/users/registerUser", payload).then((response) => {
    console.log("res: ", response.data);
    return response.data
}).catch((error) => {
    console.log("err: ", error.response.data);
    return error.response.data;
})
}