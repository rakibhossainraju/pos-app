import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { AddCustomerModal } from "../components/AddCustomerModal.jsx";

export const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <AddCustomerModal />
    </>
  );
};
