function ProfileCard({ name, job, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

export default ProfileCard;