export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={10} cols={40}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
      </textarea><br /><br />
      <table>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option >ASSIGNMENTS</option>
              <option >QUIZZES</option>
              <option >EXAMS</option>
              <option >PROJECT</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option >Percentage</option>
              <option >Letter Grade</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <form>
              <select id="wd-submission-type">
                <option >Online</option>
                <option >On Paper</option>
              </select><br />
              <span>Online Entry Options</span><br />

              <input id="wd-text-entry" name="check-genre" type="checkbox" />&nbsp;
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input id="wd-website-url" name="check-genre" type="checkbox" />&nbsp;
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input id="wd-media-recordings" name="check-genre" type="checkbox" />&nbsp;
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input id="wd-student-annotation" name="check-genre" type="checkbox" />&nbsp;
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input id="wd-file-upload" name="check-genre" type="checkbox" />&nbsp;
              <label htmlFor="wd-file-upload">File Uploads</label>
            </form>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>

            <label htmlFor="wd-assign-to">Assign to</label><br />
            <input id="wd-assign-to" defaultValue="Everyone" type="text" /><br />

            <label htmlFor="wd-due-date">Due</label><br />
            <input id="wd-due-date" defaultValue="2024-05-13" type="date" /><br />

            <label htmlFor="wd-available-from">Available from</label><br />
            <input id="wd-available-from" defaultValue="2024-05-06" type="date" /><br />

            <label htmlFor="wd-available-until">Until</label><br />
            <input id="wd-available-until" defaultValue="2024-05-20" type="date" /><br />
          </td>
        </tr>
      </table>

      <hr />

      <button>Cancel</button>&nbsp;
      <button>Save</button>
    </div>
  );
}
