
function Badge({ text, type, size }) {
  return (
    <span className={`badge ${type} ${size}`}>
      {text}
    </span>
  );
}

export default Badge;