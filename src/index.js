import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function List(props) {
  let list = props.items;
  let listItems = list.map(e => (
    <>
      <li>
        organic {e}
        <button className="remove-item">x</button>
      </li>
    </>
  ));
  return listItems;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["eggs", "cheese", "bread"]
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    let list = this.state.list;
    let item = prompt("what would you like to add to the list?");
    this.setState({ list: [...list, item] });
  }
  render() {
    return (
      <div className="App">
        <h1>my shopping list</h1>
        <button onClick={this.clickHandler}>add item</button>
        <ol>
          <List items={this.state.list} />
        </ol>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
