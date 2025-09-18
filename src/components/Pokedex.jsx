const Pokedex = ({ poke }) => {
    return (
        <div className="poke-card">
            <p>{poke.id}</p>
            <p>{poke.name.english}</p>
            <img className="poke-img"
                src={`https://play.pokemonshowdown.com/sprites/ani/${poke.name.english.toLowerCase()}.gif`}
                alt={`Imagem do ${poke.name.english}`}
                draggable="false"
            />
        </div>
    )
}

export default Pokedex