function CourseCard({ name, instructor, price }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Instructor: {instructor}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default CourseCard;