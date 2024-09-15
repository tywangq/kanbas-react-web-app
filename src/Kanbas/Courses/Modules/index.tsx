export default function Modules() {
  return (
    <div id="wd-modules">
      <button type="button">Collapse All</button>&nbsp;
      <button type="button">View Progress</button>&nbsp;
      <select>
        <option>Publish All</option>
        <option>Publish Selected</option>
      </select>&nbsp;
      <button type="button">+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro, Internet, WWW, HTML, Set up dev env</li>
                <li className="wd-content-item">Building React.js user interfaces</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Formatting User Interfaces with HTML</li>
                <li className="wd-content-item">Deploying React.js to a remote server</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
