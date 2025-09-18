const Pokedex = ({ poke, openPokeInfo }) => {
    return (
        <div className="poke-card">
            <p>{poke.id}</p>
            <p>{poke.name.english}</p>
            <img className="poke-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt={`Imagem do ${poke.name.english}`}
                draggable="false"
                onClick={() => openPokeInfo(poke)}
                role="button"
                tabIndex={0}
                onKeyDown={(e)=> (e.key === "Enter" || e.key === " ") && onOpen(poke)}
            />
        </div>
    )
}

export default Pokedex