import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container my-4">

      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fs-5">Assignment Name</label>
        <input id="wd-name" className="form-control" value="A1" />
      </div>

      <div className="mb-3 border p-3 rounded">
        <div>
          The assignment is <span style={{ color: 'red' }}>available online</span>.<br />
          Submit a link to the landing page of your Web application running on Netlify.<br />
          The landing page should include the following:<br />
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          The Kanbas application should include a link to navigate back to the landing page.
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
        <div className="col-sm-10">
          <input id="wd-points" className="form-control" value={100} />
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
              <input id="wd-due-date" className="form-control" defaultValue="2024-05-13" type="date" />
            </div>
            <div className="d-flex justify-content-between">
              <div className="me-2">
                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                <input id="wd-available-from" className="form-control" defaultValue="2024-05-06" type="date" />
              </div>
              <div>
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input id="wd-available-until" className="form-control" defaultValue="2024-05-20" type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}