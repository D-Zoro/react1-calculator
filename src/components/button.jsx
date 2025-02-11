const Button = ({ className, value, onClick }) => {
    return (
      <button
        className={`btn text-lg p-4 rounded-md shadow-md bg-gray-700 text-white ${className}`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  
  export default Button;
  