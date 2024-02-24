export const InputComponent = ({ name, placeholder, inputStyle, ...rest }) => {
  return (
    <>
      <div className="flex items-center border-b border-gray-400 py-2 has-[:focus]:border-indigo-500">
        <input
          {...rest}
          className={`mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none focus:placeholder:text-indigo-400 ${inputStyle}`}
          name={name}
          placeholder={placeholder}
          aria-label="Full name"
        />
      </div>
    </>
  );
};
