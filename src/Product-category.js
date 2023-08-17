export default function ProductCategory(props) {
  const products = props.products.map((product) => (
    <tr key={product.name} className={!product.stocked ? "table-danger" : ""}>
      <td className="w-50">{product.name}</td>
      <td className="ps-3">{product.price}</td>
    </tr>
  ));

  return (
    <table className="table table-hover m-0 p-0 w-100">
      <thead>
        <tr>
          <th className="bg-secondary text-white" scope="col">
            {props.categoryName}
          </th>
          <th className="bg-secondary text-white"></th>
        </tr>
      </thead>
      <tbody>{products}</tbody>
    </table>
  );
}
