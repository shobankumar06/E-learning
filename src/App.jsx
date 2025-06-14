import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Component/NavBar";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import CourseDetail from "./Pages/CourseDetail";
import Progress from "./Pages/Progress";
import Certificate from "./Pages/Certificate";
import Login from "./Pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/courses"
          element={isLoggedIn ? <Course /> : <Navigate to="/" />}
        />
        <Route
          path="/courses/:id"
          element={isLoggedIn ? <CourseDetail /> : <Navigate to="/" />}
        />
        <Route
          path="/progress"
          element={isLoggedIn ? <Progress /> : <Navigate to="/" />}
        />
        <Route
          path="/certificate"
          element={isLoggedIn ? <Certificate /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
