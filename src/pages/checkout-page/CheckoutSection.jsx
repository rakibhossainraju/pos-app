import { AddCustomerModal } from "../../components/AddCustomerModal.jsx";
import { useState } from "react";
import { SlotTabComponent } from "../../components/SlotTabComponent.jsx";

export const CheckoutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AddCustomerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/*Add New Customer Modal*/}
      <section onClick={() => setIsModalOpen(true)}>
        <div className="mx-4 flex items-center justify-between rounded-[5px] bg-indigo-50 px-5 py-3.5">
          <button className="flex items-center gap-3 text-lg font-semibold text-indigo-500">
            {checkoutSectionIcons.profile()}
            Steve Jobs
          </button>
          <button className="group text-indigo-500">
            <span className="block duration-300 group-hover:rotate-90">
              {checkoutSectionIcons.plus()}
            </span>
          </button>
        </div>
      </section>

      {/*Cart Listing*/}
      <section className="m-4">
        {new Array(7).fill(1).map((num, index, array) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500"
          >
            <button className="text-indigo-400 hover:text-indigo-700">
              {checkoutSectionIcons.edit()}
            </button>
            <div
              className={`flex w-full items-center justify-between rounded-sm border border-indigo-300 px-2 py-2.5 ${array.length - 1 !== index && "border-b-transparent"}`}
            >
              <p className="w-60">Hello World How is it going</p>
              <p>$91.00</p>
              <div className="flex">
                <button className="text-indigo-500">
                  {checkoutSectionIcons.minus(
                    "hover:overflow-hidden hover:rounded-full hover:bg-indigo-700 hover:text-white",
                  )}
                </button>
                <p className="w-10 text-center">1</p>
                <button className="group overflow-hidden p-[1px] text-indigo-500 hover:rounded-full hover:bg-indigo-700">
                  {checkoutSectionIcons.plus(
                    "[width:1.4rem] hover:rounded-2 hover:bg-indigo-700 group-hover:text-white",
                  )}
                </button>
              </div>
              <p>$91</p>
            </div>
            <button className="text-indigo-400 hover:text-red-600">
              {checkoutSectionIcons.bin()}
            </button>
          </div>
        ))}
      </section>

      {/*Price Board Section*/}
      <section className="ml-auto mr-4 mt-10 flex w-full max-w-72 flex-col justify-end">
        <p className="flex w-full items-center justify-between border-t border-indigo-300 py-2">
          <span className="text-sm text-slate-500">Sub Total</span>
          <span className="text-[1.1rem] font-medium text-indigo-500">
            $5025.50
          </span>
        </p>
        <p className="flex w-full items-center justify-between border-t border-indigo-300 py-2">
          <span className="text-sm text-slate-500">TAX</span>
          <span className="text-[1.1rem] font-medium text-indigo-500">
            $25.50
          </span>
        </p>
        <p className="flex w-full items-center justify-between border-t border-indigo-300 py-2">
          <span className="text-sm text-slate-500">Shipping</span>
          <span className="text-[1.1rem] font-medium text-indigo-500">
            $5.50
          </span>
        </p>
        <p className="flex w-full items-center justify-between border-t border-indigo-300 py-2">
          <span className="text-sm font-medium text-indigo-600">
            Discount on Cart
          </span>
          <span className="text-[1.1rem] font-medium text-indigo-500">
            $10.00
          </span>
        </p>
      </section>

      {/*Total Section*/}
      <section className="m-4 flex items-center justify-between rounded-[5px] bg-indigo-100 py-4 pl-4 text-indigo-700">
        <p className="font-medium">Products Count (10)</p>
        <p className="mr-2 flex w-[19rem] justify-between text-2xl font-semibold">
          <span>Total</span> <span>$5005.50</span>
        </p>
      </section>

      {/*Slot Section*/}
      <section className="mx-4 mb-8 mt-4 flex items-center gap-5 max-[1170px]:flex-wrap ">
        <SlotTabComponent styles="w-full gap-4 bg-red-100 py-4 text-lg text-red-600 shadow-sm hover:bg-red-200 hover:text-red-800">
          <span className="block rotate-45">
            {checkoutSectionIcons.plus("[width:1.4rem]")}
          </span>
          Cancel
        </SlotTabComponent>
        <SlotTabComponent styles="w-full gap-4 bg-purple-100 py-4 text-lg text-purple-600 shadow-sm hover:bg-purple-200 hover:text-purple-800">
          {checkoutSectionIcons.hold()}
          Hold
        </SlotTabComponent>
        <SlotTabComponent styles="w-full gap-4 bg-yellow-100 py-4 text-lg text-yellow-600 shadow-sm hover:bg-yellow-200 hover:text-yellow-800">
          {checkoutSectionIcons.discount()}
          Discount
        </SlotTabComponent>
        <SlotTabComponent styles="w-full gap-4 bg-blue-100 py-4 text-lg text-blue-600 shadow-sm hover:bg-blue-200 hover:text-blue-800">
          {checkoutSectionIcons.pay()}
          Payment
        </SlotTabComponent>
      </section>
    </>
  );
};

const checkoutSectionIcons = {
  profile: (styles) => (
    <svg
      className={`aspect-square w-7 ${styles}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
    >
      <circle cx="50.1" cy="39.5" r="16.7" />
      <path d="M50,3.6C24.5,3.6,3.7,24.3,3.7,49.9S24.5,96.2,50,96.2s46.3-20.8,46.3-46.3S75.5,3.6,50,3.6z M77.2,79.1  C73.8,70,66.4,60.3,50,60.3c-16.3,0-23.8,9.7-27.2,18.8C15,71.8,10,61.4,10,49.9c0-22,17.9-40,40-40s40,17.9,40,40  C90,61.4,85,71.8,77.2,79.1z" />
    </svg>
  ),
  plus: (styles) => (
    <svg
      className={`aspect-square w-6 ${styles}`}
      fill="currentColor"
      viewBox="0 0 33 33"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="Icon-Set" transform="translate(-464.000000, -1087.000000)">
          <path
            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
            id="plus-circle"
          ></path>
        </g>
      </g>
    </svg>
  ),
  minus: (styles) => (
    <svg
      className={`aspect-square w-6 ${styles}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
      />
    </svg>
  ),
  edit: (styles) => (
    <svg
      className={`aspect-square w-5 ${styles}`}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 494.936 494.936"
    >
      <g>
        <g>
          <path
            d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
          />
          <path
            d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
          />
        </g>
      </g>
    </svg>
  ),
  bin: (styles) => (
    <svg
      className={`aspect-square w-6 ${styles}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pay: (styles) => (
    <svg
      className={`aspect-square w-6 ${styles}`}
      fill="currentColor"
      version="1.1"
      id="earth"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 216"
      enableBackground="new 0 0 256 216"
    >
      <path
        d="M175.238,2.307H68.807c-5.896,0-10.648,4.4-10.648,9.812v72.069C58.159,89.6,62.911,94,68.807,94h106.388
	c5.896,0,10.648-4.4,10.648-9.812V12.119C185.886,6.707,181.134,2.307,175.238,2.307z M176.25,82.956c0,0.66-0.616,1.232-1.32,1.232
	H69.115c-0.748,0-1.32-0.572-1.32-1.232V48.154H176.25V82.956z M176.25,21.931H67.795v-8.58c0-0.66,0.616-1.232,1.32-1.232h105.772
	c0.748,0,1.32,0.572,1.32,1.232v8.58H176.25z M76.99,67.293h22.263v8.712H76.99V67.293z M107.921,67.293h32.207v8.712h-32.207
	V67.293z M229.943,83.553L186.57,124.68c1.092,2.644,1.59,5.874,1.257,8.89c-0.286,6.278-2.86,12.262-7.262,16.742
	c-4.505,4.306-10.593,6.727-16.974,6.267l-59.452-2.005c-2.81,0.015-4.599-2.217-4.512-4.854c0.088-2.636,2.217-4.599,4.679-4.409
	l59.626,1.902c7.806,0.088,14.369-5.903,14.735-13.638c0.365-7.734-5.903-14.369-13.638-14.735l-74.161-2.245
	c-12.175-0.327-25.024,1.389-31.897,12.028L2,213.693h56.623l18.808-24.781c4.331-4.203,10.522-6.45,16.974-6.267l51.615,1.465
	c12.627,0.295,24.771-4.999,32.982-13.373l70.507-66.788c5.622-5.2,6.169-14.217,0.486-20.258
	C244.549,78.449,235.738,78.25,229.943,83.553z"
      />
    </svg>
  ),
  discount: (styles) => (
    <svg
      className={`aspect-square w-6 ${styles}`}
      fill="currentColor"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="32 promo" id="_32_promo">
        <path d="M60.27,42.05c-.28-.78-.38-1.07-.43-1.19a3.762,3.762,0,0,0-3.74-2.44c-.15,0-.3.01-.46.02-1.24.1-2.46.31-3.64.5-1.01.17-2.06.34-3.08.45a51.767,51.767,0,0,1-7.03.32,52.933,52.933,0,0,1-5.91-.51,3.661,3.661,0,0,0-.33-2.03,3.936,3.936,0,0,0-2.54-2.08l-9.48-2.58a9.588,9.588,0,0,0-4.58-.09l-4.08.91v-3.4a2,2,0,0,0-2-2H5.5a2,2,0,0,0-2,2v25a2.006,2.006,0,0,0,2,2h7.47a2.006,2.006,0,0,0,2-2V52.31l16.53,3a12.686,12.686,0,0,0,2.3.2,12.821,12.821,0,0,0,4.7-.89l19.52-7.73A3.8,3.8,0,0,0,60.27,42.05ZM12.97,54.93H5.5v-25h7.47Zm44.31-9.9L37.77,52.76a10.822,10.822,0,0,1-5.91.58L14.97,50.28V35.38l4.52-1.01a7.642,7.642,0,0,1,3.62.07l9.47,2.58a1.934,1.934,0,0,1,1.27,1.02,1.725,1.725,0,0,1,.03,1.44,2.022,2.022,0,0,1-2.02,1.17l-8.22-1.7a1,1,0,0,0-1.18.77,1.01,1.01,0,0,0,.77,1.19l8.28,1.71a.34.34,0,0,0,.1.01,2.748,2.748,0,0,0,.4.02,4.089,4.089,0,0,0,3.2-1.54,54.458,54.458,0,0,0,6.62.6,54.033,54.033,0,0,0,7.3-.33c1.08-.12,2.16-.29,3.2-.47,1.14-.19,2.32-.38,3.48-.48a1.948,1.948,0,0,1,2.15,1.11v.01l.43,1.18A1.814,1.814,0,0,1,57.28,45.03Z" />

        <path d="M55.42,20.28l-2.14-2.73.49-3.43a1.016,1.016,0,0,0-.62-1.07l-3.21-1.28L48.65,8.55a1.009,1.009,0,0,0-1.07-.62l-3.43.49L41.43,6.29a.992.992,0,0,0-1.24,0L37.47,8.42l-3.43-.49a1.009,1.009,0,0,0-1.07.62l-1.29,3.22-3.21,1.28a1.016,1.016,0,0,0-.62,1.07l.49,3.43L26.2,20.28a1.006,1.006,0,0,0,0,1.23l2.14,2.73-.49,3.42a.99.99,0,0,0,.62,1.07l3.21,1.29,1.29,3.21a1,1,0,0,0,1.07.62l3.43-.49,2.72,2.14a1.009,1.009,0,0,0,.62.21,1.031,1.031,0,0,0,.62-.21l2.72-2.14,3.43.49a1,1,0,0,0,1.07-.61l1.29-3.22,3.21-1.29a1,1,0,0,0,.62-1.07l-.49-3.42,2.14-2.73A1.006,1.006,0,0,0,55.42,20.28Zm-3.98,3.06a.984.984,0,0,0-.2.76l.44,3.07-2.89,1.15a.978.978,0,0,0-.55.56l-1.16,2.88-3.07-.44a1,1,0,0,0-.76.21l-2.44,1.91-2.44-1.91a1.02,1.02,0,0,0-.62-.22c-.05,0-.1.01-.14.01l-3.08.44-1.15-2.88a1,1,0,0,0-.56-.56l-2.88-1.15.44-3.07a1.026,1.026,0,0,0-.2-.76l-1.92-2.45,1.92-2.44a1.026,1.026,0,0,0,.2-.76l-.44-3.07,2.88-1.16a.978.978,0,0,0,.56-.55l1.15-2.88,3.08.43a.994.994,0,0,0,.76-.2l2.44-1.92,2.44,1.92a.994.994,0,0,0,.76.2l3.07-.43,1.16,2.88a.99.99,0,0,0,.55.55l2.89,1.16-.44,3.07a.984.984,0,0,0,.2.76l1.92,2.44Z" />

        <path d="M35.81,14.39a3,3,0,1,0,3,3A3,3,0,0,0,35.81,14.39Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,35.81,18.39Z" />

        <path d="M45.81,21.39a3,3,0,1,0,3,3A3,3,0,0,0,45.81,21.39Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,45.81,25.39Z" />

        <path d="M35.065,26.062a1,1,0,0,0,1.413.075l10-9A1,1,0,0,0,45.14,15.65l-10,9A1,1,0,0,0,35.065,26.062Z" />
      </g>
    </svg>
  ),
  hold: (styles) => (
    <svg
      className={`aspect-square w-7 ${styles}`}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
    >
      <g>
        <g>
          <path
            d="M44.273,21.858c-0.806,0-1.417,0.378-1.879,0.927c-0.014-0.172-0.022-0.32-0.022-0.438c0-2.513-1.388-4.137-3.537-4.137
			c-0.95,0-1.676,0.265-2.217,0.639c-0.325-1.122-1.278-2.368-3.103-2.368c-1.006,0-1.779,0.301-2.354,0.681
			c-0.023-2.931-0.046-5.89-0.046-6.112c0-1.035-1.242-3.049-3.517-3.049c-1.956,0-3.049,1.837-3.386,2.922
			c-0.026,0.086-0.042,0.175-0.044,0.264l-0.474,14.3c-0.829-1.565-2.016-3.062-2.909-3.518c-1.035-0.53-2.786-0.17-3.825,0.781
			c-0.962,0.879-1.214,2.129-0.691,3.429c0.416,1.033,0.668,2.248,0.96,3.654c0.373,1.794,0.837,4.027,1.825,6.75
			c1.585,4.375,6.534,8.995,7.914,10.225v3.289c0,3.256,2.653,5.904,5.914,5.904h6.477c3.261,0,5.915-2.651,5.915-5.91v-3.95
			c1.663-2.281,2.657-6.387,2.7-6.567C47.991,39.496,48,39.418,48,39.34V25.677C48,23.393,46.502,21.858,44.273,21.858z M46,39.22
			c-0.312,1.255-1.285,4.459-2.501,5.947c-0.146,0.179-0.226,0.402-0.226,0.633v4.29c0,2.156-1.756,3.91-3.915,3.91h-6.477
			c-2.158,0-3.914-1.751-3.914-3.904v-3.743c0-0.293-0.128-0.571-0.352-0.761c-0.06-0.052-6.054-5.197-7.683-9.691
			c-0.938-2.588-1.368-4.653-1.746-6.476c-0.312-1.5-0.581-2.795-1.064-3.993c-0.26-0.647-0.06-0.964,0.145-1.168
			c0.396-0.396,1.039-0.543,1.396-0.543c0.092,0,0.166,0.01,0.211,0.028c0.674,0.345,2.313,2.669,2.737,4.35
			c0.173,0.683,0.26,1.331,0.336,1.903c0.147,1.093,0.263,1.955,0.917,2.476c0.296,0.234,0.699,0.283,1.042,0.124
			c0.343-0.158,0.567-0.496,0.58-0.874L26.16,11.41c0.137-0.344,0.626-1.41,1.437-1.41c1.16,0,1.521,1.084,1.518,1.05
			c0,0.469,0.094,12.068,0.094,12.068c0.004,0.528,0.419,0.962,0.946,0.99c0.531,0.058,0.985-0.357,1.047-0.882l0.444-3.785
			c0.176-0.27,0.738-0.961,1.868-0.961c1.01,0,1.198,0.836,1.24,1.266l0.627,4.058c0.081,0.521,0.559,0.895,1.077,0.844
			c0.525-0.047,0.924-0.493,0.911-1.02l-0.062-2.596c0.107-0.259,0.464-0.822,1.526-0.822c1.271,0,1.537,1.162,1.537,2.137
			c0,1.211,0.58,4.338,0.646,4.69c0.091,0.489,0.526,0.856,1.026,0.815c0.497-0.021,0.902-0.405,0.952-0.9
			c0.139-1.4,0.74-3.093,1.278-3.093c1.427,0,1.727,0.989,1.727,1.818L46,39.22L46,39.22z"
          />
          <path
            d="M22,7c0-3.859-3.14-7-7-7S8,3.141,8,7s3.14,7,7,7S22,10.859,22,7z M15,12c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5
			S17.757,12,15,12z"
          />
          <path
            d="M15,3c-0.552,0-1,0.447-1,1v2.586l-1.707,1.707c-0.391,0.391-0.391,1.023,0,1.414C12.488,9.902,12.744,10,13,10
			s0.512-0.098,0.707-0.293l2-2C15.895,7.519,16,7.266,16,7V4C16,3.447,15.552,3,15,3z"
          />
        </g>
      </g>
    </svg>
  ),
};
