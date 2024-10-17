import { courses } from "../Database";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">

      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2><hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
            <Route path="Zoom" element={<h3>Zoom</h3>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h3>Quizzes</h3>} />
            <Route path="Grades" element={<h3>Grades</h3>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
