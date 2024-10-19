import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignments = db.assignments;

  const formatDateTime = (dateString: any) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16);
  };

  return (
    <div id="wd-assignments-editor" className="container my-4">

      {assignments.filter((assignment: any) => assignment._id === aid).map((assignment: any) => (
        <div key={assignment._id}>
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label fs-5">Assignment Name</label>
            <input id="wd-name" className="form-control" value={assignment.title} />
          </div>

          <div className="mb-3 border p-3 rounded">{assignment.description}</div>
          <div className="mb-3 row">
            <label htmlFor={`wd-points-${assignment._id}`} className="col-sm-2 col-form-label text-end">Points</label>
            <div className="col-sm-10">
              <input id={`wd-points-${assignment._id}`} className="form-control" value={assignment.points} />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</label>
            <div className="col-sm-10">
              <select id="wd-group" className="form-select">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</label>
            <div className="col-sm-10">
              <select id="wd-display-grade-as" className="form-select">
                <option>Percentage</option>
                <option>Letter Grade</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</label>
            <div className="col-sm-10">
              <div className="border rounded p-3">
                <select id="wd-submission-type" className="form-select mb-2">
                  <option>Online</option>
                  <option>On Paper</option>
                </select>
                <span className="fw-bold">Online Entry Options</span><br />
                <div className="form-check">
                  <input id="wd-text-entry" name="check-genre" type="checkbox" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input id="wd-website-url" name="check-genre" type="checkbox" className="form-check-input" />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input id="wd-media-recordings" name="check-genre" type="checkbox" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input id="wd-student-annotation" name="check-genre" type="checkbox" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input id="wd-file-upload" name="check-genre" type="checkbox" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="wd-assign-group" className="col-sm-2 col-form-label text-end">Assign</label>
            <div className="col-sm-10">
              <div className="border rounded p-3">
                <div className="mb-3">
                  <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                  <input id="wd-assign-to" className="form-control" defaultValue="Everyone" type="text" />
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                  <input id="wd-due-date" className="form-control" value={formatDateTime(assignment.due)} type="datetime-local" />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="me-2">
                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                    <input id="wd-available-from" className="form-control" value={formatDateTime(assignment.available)} type="datetime-local" />
                  </div>
                  <div>
                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                    <input id="wd-available-until" className="form-control" value={formatDateTime(assignment.due)} type="datetime-local" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr />

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
