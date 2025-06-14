function Progress() {
  return (
    <div className="container">
      <h2>Your Progress</h2>
      <p>React Basics</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "70%" }}></div>
      </div>

      <p>JavaScript</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "40%" }}></div>
      </div>
    </div>
  );
}
export default Progress;
