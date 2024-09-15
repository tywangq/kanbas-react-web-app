import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h2 id="wd-dashboard-title">Dashboard</h2> <hr />
      <h3 id="wd-dashboard-published">Published Courses (8)</h3> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/1.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS01 Introduction to Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Start with fundamental programming concepts.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/2.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS02 Discrete Mathematics
            </Link>
            <p className="wd-dashboard-course-title">
              Learn the mathematical foundations necessary for algorithms and logic.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/3.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS03 Data Structures and Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Build on programming skills to understand data organization and efficient problem-solving.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/4.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS04 Computer Architecture
            </Link>
            <p className="wd-dashboard-course-title">
              Explore how computers function at the hardware level.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/5.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS05 Operating Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Learn how software interacts with hardware and manage system resources.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/6.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS06 Database Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Understand how to design and work with databases using queries.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/7.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS07 Computer Networks
            </Link>
            <p className="wd-dashboard-course-title">
              Study the fundamentals of communication between computers and network security.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/8.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS08 Software Engineering
            </Link>
            <p className="wd-dashboard-course-title">
              Apply learned principles to develop, design, and manage software projects.
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br /><br />
          </div>
        </div>

      </div>
    </div>
  );
}
