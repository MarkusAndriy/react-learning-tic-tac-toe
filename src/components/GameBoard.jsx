const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {player, square} = turn;
    const {row, cell} = square;
    gameBoard[row][cell] = player;
  }

  /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    setGameBoard(prevGameBoard => {
      const updatedGameBoard = [...prevGameBoard.map(row => [...row])];
      updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
      return updatedGameBoard;
    })

    onSelectSquare();
  }*/

  return (
  <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, cellIndex) => (
            <li key={cellIndex}>
              <button onClick={() => onSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  );
}