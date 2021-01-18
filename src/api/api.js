import axios from "axios";

export const api = {
    getEmp(userName) {

        return axios.get("http://api.additivasia.io/api/v1/assignment/employees/" + userName)
            .then((response) => {
                console.log("SUCCESSS")
                return response.data;
            })
            .catch(function (error) {
                return ["", {
                    "direct-subordinates": [],
                    "error": error.message
                }]
            })
    },
    getUsers() {

        return axios.get("http://api.additivasia.io/api/v1/assignment/employees/")
            .then((response) => {
                console.log("SUCCESSS")
                return response.data;
            })
            .catch(function (error) {
                alert("Error happened,cant get users of our company")
            })
    },
};