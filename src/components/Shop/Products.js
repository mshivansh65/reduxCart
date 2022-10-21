import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "p1",
    price: 6,
    name: "my First Book",
    description: "This is a first product - amazing!"
  },
  {
    id: "p2",
    price: 7,
    name: "My Second Book",
    description: "This is a second product - amazing!"
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
