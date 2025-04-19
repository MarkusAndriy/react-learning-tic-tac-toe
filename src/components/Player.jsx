import { useState } from 'react';

export default function Player({initialName, symbol, isActive}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleBtnToggle() {
    setIsEditing(prev => !prev);
  }
  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElement = <input type="text" value={playerName} required onChange={handleInputChange}/>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleBtnToggle}>{isEditing ? "Save" : "Edit" }</button>
    </li>
  )
}