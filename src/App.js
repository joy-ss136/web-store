import React, { Component } from "react";
//import Products from "./components/Products/Products";
import aShoe from "./components/shoe.jpg";
import macBook from "./components/macbook.jpg";
import jumper from "./components/purple_jumper.jpg";
import jacket from "./components/puff_jacket.jpg";
import "./App.css";
class ItemCounter extends Component {
  render() {
    const { numItems } = this.props;
    return (
      <div className="topBar">
        <h3 className="counter">
          cart: {numItems} {numItems === 1 ? "item" : "items"}!
        </h3>
      </div>
    );
  }
}

class AddRemoveItem extends Component {
  render() {
    const { numItems, ItemUpdate } = this.props;
    return (
      <div className="btn">
        <button className="Addbtn" onClick={() => ItemUpdate(numItems + 1)}>
          Add
        </button>
        <button className="Delbtn" onClick={() => ItemUpdate(numItems - 1)}>
          Remove
        </button>
      </div>
    );
  }
}
class ItemThumbnail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.thumbnail} alt="nike shoe" />
        <h2 className="title">{this.props.title}</h2>
        <h2 className="price">price {this.props.price}</h2>
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    //setting anew variable
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.state = { numItems: 0 };
  }
  handleItemUpdate(numItems) {
    this.setState({ numItems });
  }
  render() {
    return (
      <div>
        <ItemCounter numItems={this.state.numItems} />
        <div className="pannel">
          <div className="single">
            <ItemThumbnail title={"Shoes"} thumbnail={aShoe} price={"$20"} />
            <AddRemoveItem
              numItems={this.state.numItems}
              ItemUpdate={this.handleItemUpdate}
            />
          </div>
          <div className="single">
            <ItemThumbnail
              title={"Macbook"}
              thumbnail={macBook}
              price={"$1000"}
            />
            <AddRemoveItem
              numItems={this.state.numItems}
              ItemUpdate={this.handleItemUpdate}
            />
          </div>
          <div className="single">
            <ItemThumbnail title={"Jumper"} thumbnail={jumper} price={"$60"} />
            <AddRemoveItem
              numItems={this.state.numItems}
              ItemUpdate={this.handleItemUpdate}
            />
          </div>
          <div className="single">
            <ItemThumbnail title={"Jacket"} thumbnail={jacket} price={"$100"} />
            <AddRemoveItem
              numItems={this.state.numItems}
              ItemUpdate={this.handleItemUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
