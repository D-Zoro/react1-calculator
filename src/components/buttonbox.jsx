const ButtonBox = ({ children }) => {
    return (
      <div className="button-box grid grid-cols-4 gap-5 mt-7">
        {children}
      </div>
    );
  };
  
  export default ButtonBox;
  