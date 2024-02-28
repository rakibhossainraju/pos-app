import { NavbarComponent } from "../../components/NavbarComponent.jsx";
import { CheckoutSection } from "./CheckoutSection.jsx";
import { SearchBarComponent } from "../../components/SearchBarComponent.jsx";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux-store/products/products.selector.js";
import { ProductCartComponent } from "../../components/ProductCartComponent.jsx";

export const CheckoutPage = () => {
  const products = useSelector(selectProducts);
  return (
    <div className="flex w-full gap-1">
      <section className="w-1/2">
        <NavbarComponent />
        <CheckoutSection />
      </section>
      <section className="w-1/2">
        <SearchBarComponent />
        <h1 className="py-5 text-center">
          This section is reserve for the categories
        </h1>
        <div className="products-container flex h-[90vh] flex-wrap items-center justify-center gap-3 overflow-y-scroll pt-3">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCartComponent key={product.name} product={product} />
            ))
          ) : (
            <h1 className="text-2xl font-semibold text-indigo-700">
              Sorry No Product Matched.
            </h1>
          )}
        </div>
      </section>
    </div>
  );
};
