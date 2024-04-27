import moment from "moment";
import "moment/locale/fr";

export default function Card({
  name,
  type,
  date,
  heure,
  nbrParticipants,
  nbrInscrits,
  terrain,
}) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col my-5 items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-center text-center font-bold bg-gray-200 px-10 w-60">
          <h1 className="pt-4 text-2xl uppercase">
            {moment(date).format("dddd")}
          </h1>
          <h1 className="text-9xl py-3 uppercase">
            {moment(date).format("Do")}
          </h1>
          <h1 className="pb-4 text-2xl uppercase">
            {moment(date).format("MMMM")}
          </h1>
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            Type: {type}
          </h5>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            {name}
          </h4>

          <div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p className="pl-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                {terrain}
              </p>
            </div>
            <div className="flex max-sm:flex-col">
              <div className="flex pr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>

                <p className="pl-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {date} {/* changer le format */}
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="pl-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {moment(heure, "HH:mm:ss").format("LT")}
                </p>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <p className="pl-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                {nbrInscrits} joueurs inscrits sur {nbrParticipants}
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
