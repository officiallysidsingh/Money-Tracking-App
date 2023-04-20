import "./App.scss";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={"+200 new samsung tv"} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={"description"} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-04-20 17:30</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig Job New Website</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-04-20 17:30</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$200</div>
            <div className="datetime">2023-04-20 17:30</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
