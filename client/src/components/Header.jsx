import "../style/Header.css";
import { UserIcon, InboxIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between p-4 align-middle z-100 header bg-slate-200">
      <Link to="/inscription">
        <UserIcon className="w-6 h-6 fill-slate-500" />
      </Link>

      <Link to="/">
        <img src="../tinderLogo.png" className="h-6 header_logo" />
      </Link>

      <Link to="/messages">
        <InboxIcon className="w-6 h-6 fill-slate-500" />
      </Link>
    </div>
  );
}

export default Header;
