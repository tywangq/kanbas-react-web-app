import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Signin", path: "/Kanbas/Account/Signin" },
    { label: "Signup", path: "/Kanbas/Account/Signup" },
    { label: "Profile", path: "/Kanbas/Account/Profile" }
  ];

  return (
    <div className="wd list-group rounded-0 fs-5 d-none d-md-block container" id="wd-account-navigation">
      {links.map((link) => (
        <Link key={link.label} className={`list-group-item border border-0 ${pathname.includes(link.label) ? "active text-dark" : "text-danger"}`} to={`/Kanbas/Account/${link.label}`}>{link.label}</Link>
      ))}
    </div>
  );
}
