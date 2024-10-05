import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div className="wd list-group rounded-0 fs-5 d-none d-md-block container" id="wd-account-navigation">
      <Link className="list-group-item border border-0 active" id="wd-signin-link" to={"/Kanbas/Account/Signin"}>Signin</Link>
      <Link className="list-group-item border border-0 text-danger" id="wd-signup-link" to={"/Kanbas/Account/Signup"}>Signup</Link>
      <Link className="list-group-item border border-0 text-danger" id="wd-profile-link" to={"/Kanbas/Account/Profile"}>Profile</Link>
    </div>
  );
}
