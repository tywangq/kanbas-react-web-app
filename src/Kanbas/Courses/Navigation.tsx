import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Home", path: "/Kanbas/Courses/:cid/Home" },
    { label: "Modules", path: "/Kanbas/Courses/:cid/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/:cid/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/:cid/Zoom" },
    { label: "Assignments", path: "/Kanbas/Courses/:cid/Assignments" },
    { label: "Quizzes", path: "/Kanbas/Courses/:cid/Quizzes" },
    { label: "Grades", path: "/Kanbas/Courses/:cid/Grades" },
    { label: "People", path: "/Kanbas/Courses/:cid/People" },
  ];

  return (
    <div className="wd list-group rounded-0 fs-5 d-none d-md-block" id="wd-courses-navigation">

      {links.map((link) => (
        <Link key={link.label} className={`list-group-item border border-0 ${pathname.includes(link.label) ? "active text-dark" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/${link.label}`}>{link.label}</Link>
      ))
      }
    </div>
  );
}
