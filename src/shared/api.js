import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.thesportsdb.com/api/v1/json/2/all_sports.php",
});


export const listAllSports = async () => {
    const response = await instance.get();
    return response;
};
  

console.log(listAllSports());


