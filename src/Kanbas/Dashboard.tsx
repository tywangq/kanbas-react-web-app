import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h2 id="wd-dashboard-title">Dashboard</h2> <hr />
      <h3 id="wd-dashboard-published">Published Courses (8)</h3> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/1.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS01 Introduction to Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Start with fundamental programming concepts.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/2.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS02 Discrete Mathematics
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn the mathematical foundations necessary for algorithms and logic.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/3.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS03 Data Structures and Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Build on programming skills to understand data organization and efficient problem-solving.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/4.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS04 Computer Architecture
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Explore how computers function at the hardware level.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/5.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS05 Operating Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn how software interacts with hardware and manage system resources.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/6.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS06 Database Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Understand how to design and work with databases using queries.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/7.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS07 Computer Networks
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Study the fundamentals of communication between computers and network security.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/8.png" width="100%" height={180} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS08 Software Engineering
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Apply learned principles to develop, design, and manage software projects.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
