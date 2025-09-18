function Search({Search, setSearch}) {
  return (
          <input className='pokedex-search' 
          type="text" 
          placeholder='Pesquisar Pokémon' 
          maxLength={20}
          onChange={(e) => setSearch(e.target.value)}/>
  )
}

export default Search