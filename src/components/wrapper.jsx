const Wrapper = ({ children }) => {
    return (
      <div className="wrapper bg-gradient-to-t from-gray-800 to-white pl-4-10 m-3  rounded-md shadow-lg">
        {children}
      </div>
    );
  };
  
  export default Wrapper;
  