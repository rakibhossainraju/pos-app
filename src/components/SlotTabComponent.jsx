export const SlotTabComponent = ({ styles, children, ...rest }) => (
  <button
    {...rest}
    className={`flex-center gap-3.5 rounded-[5px] bg-indigo-50 px-3 py-2 font-semibold text-indigo-500 duration-200 ${styles ? styles : "hover:bg-indigo-200 hover:text-indigo-600"}`}
  >
    {children}
  </button>
);
