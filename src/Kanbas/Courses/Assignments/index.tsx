import { useParams } from "react-router-dom";
import * as db from "../../Database";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { AiOutlinePlus } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const formatDate = (isoDate: any) => {
    const date = new Date(isoDate);
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    } as const;
    const formattedDate = date.toLocaleString('en-US', options).replace(',', '');
    return formattedDate.replace(/(AM|PM)/g, (match) => match.toLowerCase());
  };

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

            <ul className="wd-assignment-list-item list-group rounded-0">
              {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                <li key={assignment._id} className="list-group-item p-3">
                  <div className="d-flex justify-content-between align-items-center">

                    {/* left-side icons */}
                    <div className="d-flex align-items-center">
                      <i className="fa fa-pencil-square-o me-2 fs-3" aria-hidden="true"></i>
                      <BsGripVertical className="me-2 fs-3" />
                      <FaRegEdit className="me-2 fs-3 text-success" />
                    </div>

                    {/* middle section */}
                    <div className="flex-grow-1 mx-3">
                      <a className="wd-assignment-link fw-bold" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment._id}
                      </a>
                      <div>
                        <span className="text-danger">Multiple Modules</span> &#124;
                        <strong> Not available until </strong> {formatDate(assignment.available_date)} &#124;
                        <strong> Due </strong> {formatDate(assignment.due_date)} &#124; {assignment.points} pts
                      </div>
                    </div>

                    {/* right-side icons */}
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
