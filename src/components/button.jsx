const Button = ({ className, value, onClick }) => {
    return (
      <button
        className={`btn text-lg p-4 m-4 rounded-md shadow-md bg-gradient-to-tr from-gray-700 to-pink-500 text-white ${className}`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  
  export default Button;
  