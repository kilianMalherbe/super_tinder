import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img
        src="../tinderLogo.png"
        className="w-12 h-12 transition-all duration-300 ease-in-out sm:w-24 sm:h-24 md:w-32 md:h-32 aspect-square"
      />
      <h1 className="max-w-2xl px-12 pt-8 text-xl font-bold text-center">
        Bienvenue sur "Super Tinder" - Où les Super-Héros Trouvent leur Alter
        Ego
      </h1>
      <p className="max-w-2xl px-12 pt-8 text-justify">
        Êtes-vous un super-héros ou une super-héroïne à la recherche de votre
        âme sœur dans un monde rempli de pouvoirs et de mystères ? Cherchez-vous
        l'équivalent de votre "kryptonite" en matière d'amour ? Alors, bienvenue
        sur "Super Tinder" - l'application de rencontres pour les super-héros et
        super-héroïnes du monde entier !
      </p>

      <div className="flex items-center gap-8 pt-12">
        <Link
          to="/inscription"
          className="px-6 py-3 font-semibold rounded-lg bg-neutral-100"
        >
          S'inscrire
        </Link>
        <Link
          to="/connexion"
          className="px-6 py-3 font-semibold rounded-lg bg-neutral-100"
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
}
