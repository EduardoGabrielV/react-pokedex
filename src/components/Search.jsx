function Search({search, setSearch}) {
  return (
          <input className='pokedex-search' 
          type="text" 
          placeholder='Pesquisar Pokémon' 
          maxLength={20}
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
  )
}

export default Search