import { UserIcon, InboxIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  let queryParameters = new URLSearchParams(window.location.search);

  if (
    location.pathname === "/welcome" ||
    location.pathname === "/connexion" ||
    location.pathname === "/inscription" ||
    location.pathname === "/profil"
  ) {
    return null;
  }

  if (queryParameters.size > 0) {
    const id = queryParameters.get("_id");
    const name = queryParameters.get("name");
    const avatar = queryParameters.get("avatar");
    const email = queryParameters.get("email");
    const age = queryParameters.get("age");
    const city = queryParameters.get("city");
    const password = queryParameters.get("password");

    return (
      <div className="flex items-center justify-between p-4 z-100 bg-neutral-100">
        <Link
          to={
            "/profil?_id=" +
            id +
            "&name=" +
            name +
            "&avatar=" +
            avatar +
            "&email=" +
            email +
            "&age=" +
            age +
            "&city=" +
            city +
            "&password=" +
            password
          }
        >
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Avatar"
              className="object-cover rounded-lg w-9 h-9"
            />
            <h1 className="font-bold">{name}</h1>
          </div>
        </Link>

        <Link to="/messages">
          <InboxIcon className="w-6 h-6 fill-neutral-800" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-between p-4 align-middle z-100">
      <Link to="/connexion">
        <UserIcon className="w-6 h-6 fill-neutral-800" />
      </Link>

      {/* <Link to="/">
        <img src="../tinderLogo.png" className="h-6 header_logo" />
      </Link> */}

      <Link to="/messages">
        <InboxIcon className="w-6 h-6 fill-neutral-800" />
      </Link>
    </div>
  );
}

export default Header;
