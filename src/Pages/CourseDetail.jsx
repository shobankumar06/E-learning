import { useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Course: {id.toUpperCase()}</h2>
      <div>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dGcsHMXbSOA"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <p>Course content, modules, and quizzes will appear here.</p>
    </div>
  );
}
export default CourseDetail;
