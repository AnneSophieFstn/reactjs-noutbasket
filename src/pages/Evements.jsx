import { useEffect, useState } from "react";
import Card from "../components/Card";
import urlAPI from "../_helpers/axiosConfig";

export default function Evenements() {
  const [evenements, setEvenements] = useState([]);
  const [message, setMessages] = useState(null);

  const getEvenements = async () => {
    try {
      const response = await urlAPI.get("/evenements");
      setEvenements(response.data);
    } catch (error) {
      setMessages("Une erreur est survenue, veuillez réessayer plus tard...");
    }
  };

  useEffect(() => {
    getEvenements();
  }, []);

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute">
          <h1 className="lg:text-[15rem] font-bold tracking-wider text-white text-center max-sm:text-4xl sm:text-8xl lg:text-9xl">
            Évènements
          </h1>

          <p className="text-white font-bold text-center pt-8 max-sm:text-[10px]">
            Découvrez les futurs évènements prévus autour du basketball à la
            Réunion.
          </p>
        </div>

        <img
          className="object-cover object-center h-[38rem] w-full"
          src="https://images.unsplash.com/photo-1561917443-6c5a9a4fca6e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Street basketball"
        />

        <div className="flex flex-col relative bottom-12 bg-white border-sky-50 border-2 rounded-3xl px-8 py-3 sm:flex-row">
          <div className="mr-5 sm:w-48 md:w-64 lg:w-96">
            <label
              htmlFor="evenement"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Rechercher un évènement
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                name="evenement"
                id="evenement"
                className="peer block w-full border-0 bg-white py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Entrer la ville"
              />
              <div
                className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="max-sm:pt-3 sm:w-48 md:w-64 lg:w-96">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Date
            </label>
            <div className="relative mt-2">
              <input
                datepicker
                type="datetime"
                name="date"
                id="date"
                className="peer block w-full border-0 bg-white py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Selectionner la date"
              />
              <div
                className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="mx-3 content-end items-center text-center py-3">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold py-10">Évènements à venir</h1>

        <div className="mb-10 flex flex-col justify-center">
          {message !== null ? (
            <h2 className="text-red-500">{message}</h2>
          ) : evenements.length > 0 ? (
            evenements.map((evenement) => (
              <Card
                key={evenement.id}
                name={evenement.name}
                type={evenement.type}
                date={evenement.date}
                heure={evenement.heure}
                nbrParticipants={evenement.nbrPlaces}
                nbrInscrits={evenement.nbrInscrits}
                terrain={evenement.terrain.adresse}
              />
            ))
          ) : (
            <h2 className="text-red-500">Aucun évènement trouvé</h2>
          )}
        </div>
      </div>
    </div>
  );
}
