import Product from "./Product";
export default function ({ listofprods }) {
  return (
    <div id="list">
      {listofprods.map(({ brand, name, price, url }) => (
        <Product brand={brand} name={name} price={price} url={url} />
      ))}
      {/* {listofprods.map(( pro ) => (
        <Product brand={pro.brand} name={pro.name} price={price} url={url} />
      ))} */}
    </div>
  );
}
