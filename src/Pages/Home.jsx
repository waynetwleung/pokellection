import React from 'react';
import SearchBar from '../client/components/searchBar';
import CardDetail from '../client/components/cardDetail';
import PokemonCard from '../client/components/pokemonCard';



// Page displayed after user successfully logs in or creates a new user
const Home = () => {
    return (
        <div>
            <SearchBar />
            <CardDetail />
            <PokemonCard />

        </div>
    ) 
}


export default Home;