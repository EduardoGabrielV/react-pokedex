import { useEffect } from 'react'

const PokeInfo = ({ poke, onClose }) => {

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="poke-info-overlay" onClick={onClose}>
      <div className="poke-info-details" onClick={(e) => e.stopPropagation()}>
        <header className="poke-info-header">
          <h3>#{poke.id} — {poke.name.english}</h3>
          <button className="poke-info-close" onClick={onClose} aria-label="Fechar">×</button>
        </header>

        <div className="poke-info-body">
          <img
            className="poke-info-img"
            src={`https://play.pokemonshowdown.com/sprites/ani/${poke.name.english.toLowerCase()}.gif`}
            alt={poke.name.english}
            draggable="false"
          />

          <div className="poke-info-panel">
            <div className="poke-info-types">
              {poke.type.map(t => <span key={t} className={`type type--${t.toLowerCase()}`}>{t}</span>)}
            </div>

            <ul className="poke-info-stats">
              <li>HP: <strong>{poke.base.HP}</strong></li>
              <li>Attack: <strong>{poke.base.Attack}</strong></li>
              <li>Defense: <strong>{poke.base.Defense}</strong></li>
              <li>Sp. Atk: <strong>{poke.base["Sp. Attack"]}</strong></li>
              <li>Sp. Def: <strong>{poke.base["Sp. Defense"]}</strong></li>
              <li>Speed: <strong>{poke.base.Speed}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeInfo