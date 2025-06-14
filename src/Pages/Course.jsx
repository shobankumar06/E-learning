import { Link } from "react-router-dom";

function Courses() {
  const courseList = [
    { id: "react", title: "React Basics", desc: "Intro to React framework." },
    { id: "js", title: "JavaScript", desc: "Learn core JS concepts." },
  ];

  return (
    <div className="container">
      <h1>All Courses</h1>
      {courseList.map((course) => (
        <div className="course-card" key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
          <Link to={`/courses/${course.id}`}>
            <button className="button">View Course</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Courses;
