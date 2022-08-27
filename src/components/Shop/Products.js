import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_products = [
  {
  id: 'B1',
  title: 'Elephant Book',
  price: 35,
  description: 'Book on Genetics by kelvin comb'
},
{
  id: 'B2',
  title: 'javascript course',
  price: 50,
  description: 'Book on javascript programming by Vitalis Noble'
},
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_products.map((product) => (
        <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)
        )}
      </ul>
    </section>
  );
};

export default Products;
