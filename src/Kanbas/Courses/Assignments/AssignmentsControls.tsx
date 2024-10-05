import { RxMagnifyingGlass } from "react-icons/rx";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">

      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        + Assignment</button>

      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        + Group</button>

      <div className="input-group float-start" style={{ marginLeft: '10px', height: '50px', width: '500px' }}>
        <span className="input-group-text" style={{ backgroundColor: 'transparent', borderRight: 'none' }}>
          <RxMagnifyingGlass className="fs-3" />
        </span>
        <input type="text" className="form-control fs-4" placeholder="Search..." style={{ borderLeft: 'none', paddingLeft: '5px' }} />
      </div>
    </div>
  );
}
