import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      </ul>
      <li><Link to="/Kanbas">Kanbas</Link></li>
      <li><Link to="https://github.com/tywangq/kanbas-react-web-app">Github</Link></li>
    </ul>
  );
}
