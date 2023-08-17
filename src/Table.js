import ProductCategory from "./Product-category";

export default function Table(props) {
  const categoryTemplates = props.categories.map((item) => (
    <ProductCategory
      key={item.category}
      categoryName={item.category}
      products={item.products}
    ></ProductCategory>
  ));

  return (
    <table className="table table-light table-striped-columns m-0 p-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2" className="m-0 p-0">
            {categoryTemplates}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
