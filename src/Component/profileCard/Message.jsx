function Message({ message, type }) {
  return (
    <div className={`message ${type}`}>
      {message}
    </div>
  );
}

export default Message;