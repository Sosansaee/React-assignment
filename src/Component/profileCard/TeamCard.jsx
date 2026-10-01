 function TeamCard({ name, position, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  );
}

export default TeamCard;