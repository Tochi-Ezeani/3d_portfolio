const Alert = ({ type, text }) => {
  return (
    <div className="absolute left-0 right-0 top-10 flex justify-center items-center">
      <div
        className={`${type === "danger" ? "bg-red-800" : "bg-blue-800"} flex text-indigo-100 leading-none lg:rounded-full lg:inline-flex p-2`}
        role="alert"
      >
        <p
          className={`${type === "danger" ? "bg-red-500" : "bg-blue-500"} rounded-full flex uppercase font-semibold text-xs px-2 py-1 mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="text-left mr-2">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
