import { Routes, Route, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h1>Welcome to Web Dev!</h1>
      <h2>Tianyun Wang (Section 02)</h2>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
