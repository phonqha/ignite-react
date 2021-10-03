const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAME":
            return { ...state, popular: action.payload.popular };
        default:
            return { ...state };
    }
};

export default gameReducer;
