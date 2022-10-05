import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.thesportsdb.com/api/"
});



export const listAllSports = () => {
    const response = instance.get("v1/json/2/all_sports.php");
    return response;
};


