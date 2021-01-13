import axios from "axios";


export const api = {

    getEmp(userName) {

        return axios.get("http://api.additivasia.io/api/v1/assignment/employees/" + userName)
            .then((response) => {
                return response.data
            })
            .catch(function (error) {
                alert(JSON.stringify(error))
                return ["", {
                    "direct-subordinates": []
                }]
            })
    },
};