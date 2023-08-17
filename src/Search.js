import { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: null, filteringInStock: false };
  }

  onSearchChange(evt) {
    const keyword = evt.target.value.toLowerCase();
    this.setState(
      {
        search: keyword
      },
      () => {
        this.props.searchChange(keyword);
      }
    );
  }

  onCheckboxChange() {
    this.setState(
      (prevState) => ({
        filteringInStock: !prevState.filteringInStock
      }),
      () => this.props.checkboxChange(this.state.filteringInStock)
    );
  }

  render() {
    return (
      <div className="sticky-top bg-white p-3 border-bottom shadow-sm d-flex flex-column">
        <input
          className="form-control mb-3"
          id="keywords"
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={(evt) => this.onSearchChange(evt)}
        />

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="only-in-stock"
            onClick={() => this.onCheckboxChange()}
          />
          <label className="form-check-label" htmlFor="only-in-stock">
            Only show products in stock
          </label>
        </div>
      </div>
    );
  }
}
