 
 
 
 function UserCard({ name, location, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{location}</p>
    </div>
  );
}

export default UserCard;