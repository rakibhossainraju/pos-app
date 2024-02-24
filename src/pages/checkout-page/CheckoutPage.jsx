import { NavbarComponent } from "../../components/NavbarComponent.jsx";
import { AddCustomerModal } from "../../components/AddCustomerModal.jsx";
import { CheckoutSection } from "./CheckoutSection.jsx";

export const CheckoutPage = () => {
  return (
    <>
      <section className="w-1/2">
        <NavbarComponent />
        <CheckoutSection />
      </section>
    </>
  );
};
