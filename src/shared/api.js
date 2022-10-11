import axios from "axios";


export const listAllSports = async () => {
    const response = await axios.get("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");
    return response;
};

export const listAllLeagues = async () => {
    const response = await axios.get("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php");
    return response;
};


