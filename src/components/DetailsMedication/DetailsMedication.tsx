import { useNavigate } from "react-router-dom";
import { MedicationProps } from "../Medication/Medication";

const DetailsMedication = ({ medtoshow }: MedicationProps) => {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL as string;

  const navigateToEdit = () => {
    navigate(`/update/${medtoshow.id}`);
  };

  const handleImageError = (error: any) => {
    let defaultSrc = medtoshow.defaultImage
      ? medtoshow?.defaultImage
      : "/backup.png";
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = defaultSrc as string;
  };
  return (
    <div
      key={medtoshow.id}
      className="mt-8 pt-2 flex flex-col items-center justify-center sm:px-6 lg:px-8"
    >
      <div className="mt-20 mb-3 p-10 sm:px-6 lg:px-8 cursor-pointer rounded-3xl border border-gray-500 bg-gray-100 transition duration-300 ease-in-out hover:scale-103 hover:drop-shadow-2xl">
        <div className="flex flex-col -mb-20 -translate-y-1/2 transform">
          <img
            src={`${url}images/${medtoshow.image}`}
            onError={handleImageError}
            alt={medtoshow.title}
            className="mt-6 space-y-6 scale-75 rounded-lg md:object-scale-down"
          ></img>
        </div>
        <div className="text-center">
          <h3 className="text-center text-4xl text-cyan-900 font-bold">
            {" "}
            {medtoshow.title}
          </h3>
          <span className="text-lg pt-1">Category: {medtoshow.category}</span>
        </div>
        <div className="text-center pt-2">
          <span
            className="underline
        decoration-yellow-500 decoration-[0.25rem]
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-yellow-500/50 focus:decoration-yellow-500/50"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={medtoshow.prospect}
              className="text-1 text-cyan-900 text-lg text-center"
            >
              Read Prospect here
            </a>
          </span>
        </div>
        <ul className="mt-16 mb-20 flex justify-center text-2xl">
          <li className="flex flex-col">
            <span className="font-bold">Description:</span>
            <p>{medtoshow.uses}</p>
            <span className="pt-5 font-bold">Recommended dosis:</span>
            <p>{medtoshow.dosis}</p>
          </li>
        </ul>
        <div className="flex flex-col space-x-2 justify-center">
          <button
            onClick={navigateToEdit}
            type="submit"
            className="bg-teal-500 max-w-md m-1 inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailsMedication;
