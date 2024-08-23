function Button({ onClick, children }) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
export default Button;
