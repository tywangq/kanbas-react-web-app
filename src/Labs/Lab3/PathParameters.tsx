import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <Link to="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
      <Link to="/Labs/Lab3/add/3/4">3 + 4</Link> <br />
      <Routes>
        <Route path="add/:a/:b" element={<AddPathParameters />} />
      </Routes>
    </div>);
}
