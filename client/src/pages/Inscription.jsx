import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Inscription() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch("http://localhost:8001/tinder/users/create", {
        methods: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.success === false) {
        setError(true);
        return;
      }

      const data = await res.json();
      setLoading(false);

      navigate("/connexion");
    } catch (err) {
      console.log(err);

      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-xl px-6 mx-auto">
      <h1 className="mt-4 text-2xl font-bold text-center">Inscription</h1>
      <form className="w-full p-6" onSubmit={HandleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none"
            onChange={HandleChange}
            required
          />
        </div>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            onChange={HandleChange}
            required
          />
        </div>
        <button
          disabled={loading}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          {loading ? "Chargement" : "S'incrire"}
        </button>
        <p className="mt-4 text-center">
          Avez-vous déjà un compte ?{" "}
          <Link
            to="/connexion"
            className="font-bold text-red-700 hover:text-red-800"
          >
            Connexion
          </Link>
        </p>
      </form>
      <p>{error && "Problème de d'inscription"}</p>
    </div>
  );
}
