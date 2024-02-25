import { InputComponent } from "./InputComponent.jsx";

export const AddCustomerModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <section
      className={`flex-center absolute inset-0 z-20 min-h-screen w-full transition-opacity duration-500 ${
        isModalOpen ? "scale-100" + " opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className={`absolute inset-0 -z-10 h-[115%] bg-[#757C81B2]`}
      />
      <form
        className={`group relative z-20 flex w-full max-w-[30rem] flex-col gap-2 rounded-lg bg-white px-12 py-10 shadow-xl`}
      >
        <h4 className="flex-center relative text-2xl font-medium group-focus-within:text-indigo-600">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute left-0"
          >
            {AddCustomerModalIcons.leftAngel(
              "group-focus-within:fill-indigo-600 hover:fill-indigo-600",
            )}
          </button>
          Add New Customer
        </h4>
        <InputComponent name="customerName" placeholder="Name" />
        <InputComponent name="customerEmail" placeholder="Email" type="email" />
        <InputComponent name="customerPhone" placeholder="Phone" />
        <InputComponent name="currency" placeholder="Currency" />
        <InputComponent name="taxId" placeholder="TAX-ID" />
        <p className="mb-10 mt-3 flex items-center gap-2 text-lg font-medium text-indigo-600">
          {AddCustomerModalIcons.plus("fill-indigo-600")} Add More Details
        </p>
        <button
          type="button"
          className="w-full rounded-[3px] bg-indigo-700 px-2 py-3 text-xl font-semibold text-white hover:bg-indigo-600 "
        >
          Update
        </button>
      </form>
    </section>
  );
};

const AddCustomerModalIcons = {
  leftAngel: (styles) => (
    <svg
      className={`aspect-square w-8 ${styles}`}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
    </svg>
  ),
  plus: (styles) => (
    <svg
      className={`aspect-square w-7 ${styles}`}
      enableBackground="new 0 0 50 50"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="50" width="50" />
      <line
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="4"
        x1="9"
        x2="41"
        y1="25"
        y2="25"
      />
      <line
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="4"
        x1="25"
        x2="25"
        y1="9"
        y2="41"
      />
    </svg>
  ),
};
