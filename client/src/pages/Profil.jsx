import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profil() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let queryParameters = new URLSearchParams(window.location.search);
  let id = queryParameters.get("_id");
  let name = queryParameters.get("name");
  let avatar = queryParameters.get("avatar");
  let email = queryParameters.get("email");
  let age = queryParameters.get("age");
  let city = queryParameters.get("city");
  let password = queryParameters.get("password");

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        `http://localhost:8001/tinder/users/update/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.success === false) {
        setError(true);
        return;
      }

      const resAfterUpdate = await fetch(
        `http://localhost:8001/tinder/users/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (resAfterUpdate.success === false) {
        setError(true);
        return;
      }

      const data = await resAfterUpdate.json();
      setLoading(false);

      name = data.name;
      avatar = data.avatar;
      email = data.email;
      password = data.password;
      age = data.age;
      city = data.city;

      navigate(
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
      );
    } catch (err) {
      console.log(err);

      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-xl px-6 pt-8 mx-auto mt-10 mb-20">
      <img
        src={avatar}
        alt="Avatar"
        className="object-cover rounded-lg w-28 h-28"
      />
      <h1 className="mt-6 mb-4 text-2xl font-bold text-center">
        Bienvenue, {name}
      </h1>
      <form className="w-full p-6" onSubmit={HandleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="avatar"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            defaultValue={avatar}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none"
            onChange={HandleChange}
            placeholder="URL de l'avatar"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none"
            onChange={HandleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            defaultValue={password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            onChange={HandleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Âge
          </label>
          <input
            type="number"
            id="age"
            defaultValue={age}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            onChange={HandleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ville
          </label>
          <input
            type="text"
            id="city"
            defaultValue={city}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            onChange={HandleChange}
            required
          />
        </div>
        <button
          disabled={loading}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          {loading ? "Chargement" : "Mettre à jour le profil"}
        </button>
      </form>
      <p>{error && "Problème du profil"}</p>
    </div>
  );
}
