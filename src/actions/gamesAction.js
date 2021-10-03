import axios from "axios";
import { popularGamesURL } from "../api";

//Actions creator

export const loadGames = () => async (dispatch) => {
    //fetch axios
    const popularData = await axios.get(popularGamesURL());
    dispatch({
        type: "FETCH_GAME",
        payload: {
            popular: popularData.data.results,
        },
    });
};
