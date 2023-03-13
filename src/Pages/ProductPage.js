import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchProduct from "../Components/Product-card/FetchProduct";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <section className="mb-20 overflow-hidden">
        <FetchProduct />
      </section>
      <Footer />
    </div>
  );
};

export default ProductPage;
