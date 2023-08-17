import Search from "./Search";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
import model from "./model.json";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: this.parseCategoriesFromJSON(),
      keyword: null,
      onlyStockDisplayed: false
    };
  }

  parseCategoriesFromJSON() {
    return Object.values(
      model.reduce((acc, { category, name, price, stocked }) => {
        acc[category] ??= { category: category, products: [] };
        if (Array.isArray(name))
          acc[category].name = acc[category].name.concat(name);
        else acc[category].products.push({ name, price, stocked });

        return acc;
      }, {})
    );
  }

  filterSearch(keyword) {
    this.setState({ keyword: keyword }, () => {
      this.setState({ categories: this.resetCategories() });
    });
  }

  filterOnlyStocked(enabled) {
    this.setState({ onlyStockDisplayed: enabled }, () => {
      this.setState({
        categories: this.resetCategories()
      });
    });
  }

  resetCategories() {
    let categories = this.parseCategoriesFromJSON();
    if (this.state.keyword) {
      categories = categories.map((category) => {
        category.products = category.products.filter((product) =>
          product.name.toLowerCase().startsWith(this.state.keyword)
        );
        return category;
      });
    }
    if (this.state.onlyStockDisplayed) {
      categories = categories.map((category) => {
        category.products = category.products.filter(
          (product) => product.stocked
        );
        return category;
      });
    }

    return categories;
  }

  render() {
    return (
      <div className="d-flex flex-column p-0 w-100">
        <Search
          searchChange={(keyword) => this.filterSearch(keyword)}
          checkboxChange={(enabled) => this.filterOnlyStocked(enabled)}
        ></Search>
        <Table categories={this.state.categories}></Table>
      </div>
    );
  }
}
