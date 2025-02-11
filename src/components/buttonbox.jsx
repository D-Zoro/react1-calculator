const ButtonBox = ({ children }) => {
    return (
      <div className="button-box grid grid-cols-4 gap-2 mt-4">
        {children}
      </div>
    );
  };
  
  export default ButtonBox;
  