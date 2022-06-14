import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteMedicationsThunk } from "../../redux/thunks/medicationsThunks";
import { MedicationProps } from "../Medication/Medication";

const DetailsMedication = ({ medtoshow }: MedicationProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL as string;

  const handleDelete = () => {
    dispatch(deleteMedicationsThunk(medtoshow.id));
    navigate(`/medications`);
  };
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
      className="mt-8 px-2 pt-2 flex flex-col items-center justify-center"
    >
      <div className="mt-20 mb-3 p-10 h-fit sm:px-6 lg:px-8 cursor-pointer rounded-3xl border border-gray-500 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
        <div className="-mb-20 -translate-y-1/2 transform">
          <img
            src={`${url}images/${medtoshow.image}`}
            onError={handleImageError}
            alt={medtoshow.title}
            className="lg:h-46 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 pt-3 md:object-scale-down"
          ></img>
        </div>
        <div className="text-center">
          <h3 className="text-center text-4xl font-bold"> {medtoshow.title}</h3>
          <span className="text-md">Category: {medtoshow.category}</span>
        </div>
        <span
          className="underline pl-14
        decoration-yellow-500 decoration-[0.25rem]
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-yellow-500/50 focus:decoration-yellow-500/50"
        >
          <a
            href={medtoshow.prospect}
            className="text-1 text-cyan-800 font-medium text-center"
          >
            Read Prospect here
          </a>
        </span>

        <ul className="mt-16 mb-20 flex justify-center text-2xl">
          <li className="flex flex-col">
            <span className="font-bold">Description:</span>
            <p>
              {" "}
              Drugs that lower blood pressure. The types of antihypertensives
              currently marketed include diuretics, beta-blockers, calcium
              channel blocker, ACE (angiotensin- converting enzyme) inhibitors,
              centrally acting antihypertensives and sympatholytics.
            </p>
          </li>
        </ul>
        <div className="flex flex-col space-x-2 justify-center">
          <button
            onClick={navigateToEdit}
            type="submit"
            className="bg-teal-500 m-1 inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            type="submit"
            className="bg-teal-500 inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailsMedication;
