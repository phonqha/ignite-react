import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Componets
import Game from "../components/Game";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    //fetch game
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //get data
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
    return (
        <GameList>
            <GameDetail />
            <h2>Upcoming Game</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game
                        name={game.name}
                        id={game.id}
                        key={game.id}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Game</h2>
            <Games>
                {popular.map((game) => (
                    <Game
                        name={game.name}
                        id={game.id}
                        key={game.id}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Game</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        name={game.name}
                        id={game.id}
                        key={game.id}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled.div`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
