import { useState } from "react";

function Home() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", status: "completed" },
    { id: 2, title: "HTML & CSS", status: "in-progress" },
    { id: 3, title: "JavaScript Mastery", status: "not-started" },
  ]);

  return (
    <div className="container">
      <h2>Welcome to E-Learning</h2>

      <h3>📚 In Progress</h3>
      <ul>
        {courses
          .filter(course => course.status === "in-progress")
          .map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
      </ul>

      <h3>✅ Completed</h3>
      <ul>
        {courses
          .filter(course => course.status === "completed")
          .map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
