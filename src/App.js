import './App.scss';

function App() {
  return (
    <div className="trello-wrapper">
      <nav className="navbar app">App bar</nav>
      <nav className="navbar board">board bar</nav>
      <div className="board-columns">
        <header> brainstore</header>
        <ul>
          <li>
            Add what you'd like to work on bellow
          </li>
        </ul>
        <footer>Add another card</footer>
      </div>
    </div>
  );
}

export default App;
