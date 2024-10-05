import AssignmentsControls from "./AssignmentsControls"
import LessonControlButtons from "../Modules/LessonControlButtons";
import { AiOutlinePlus } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
  return (
    <div>
      <div id="wd-assignments" className="container">
        <AssignmentsControls /><br /><br /><br />
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-4 ps-3 bg-secondary">
              <BsGripVertical className="me-0 fs-3" />
              <RiArrowDropDownFill className="me-2 fs-4" />
              ASSIGNMENTS
              <IoEllipsisVertical className="float-end fs-4" />
              <AiOutlinePlus className="float-end me-2 fs-4" />
              <div className="rounded-rectangle float-end me-2">
                <span className="text">40% of total</span>
              </div>
            </div>

            {/* a1 */}
            <ul className="wd-assignment-list-item list-group rounded-0">
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                {/* a1 left */}
                <div className="row align-items-center">
                  <div className="col-auto d-flex align-items-center">
                    <i className="fa fa-pencil-square-o me-2 fs-3" aria-hidden="true"></i>
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-2 fs-3 text-success" />
                  </div>

                  {/* a1 right */}
                  <div className="col d-flex justify-content-between align-items-center">
                    <div>
                      <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">A1</a>
                      <div>
                        <span className="text-danger">Multiple Modules</span> | <strong> Not available until </strong> May 6 at 12:00am | <strong> Due </strong> May 13 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* a2 */}
            <ul className="wd-assignment-list-item list-group rounded-0">
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                {/* a2 left */}
                <div className="row align-items-center">
                  <div className="col-auto d-flex align-items-center">
                    <i className="fa fa-pencil-square-o me-2 fs-3" aria-hidden="true"></i>
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-2 fs-3 text-success" />
                  </div>

                  {/* a2 right */}
                  <div className="col d-flex justify-content-between align-items-center">
                    <div>
                      <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">A2</a>
                      <div>
                        <span className="text-danger">Multiple Modules</span> | <strong> Not available until </strong> May 13 at 12:00am | <strong> Due </strong> May 20 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* a3 */}
            <ul className="wd-assignment-list-item list-group rounded-0">
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                {/* a3 left */}
                <div className="row align-items-center">
                  <div className="col-auto d-flex align-items-center">
                    <i className="fa fa-pencil-square-o me-2 fs-3" aria-hidden="true"></i>
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-2 fs-3 text-success" />
                  </div>

                  {/* a3 right */}
                  <div className="col d-flex justify-content-between align-items-center">
                    <div>
                      <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">A3</a>
                      <div>
                        <span className="text-danger">Multiple Modules</span> | <strong> Not available until </strong> May 20 at 12:00am | <strong> Due </strong> May 27 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </div>
              </li>
            </ul >
          </li >
        </ul >
      </div >
    </div>
  );
}
