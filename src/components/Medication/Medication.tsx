import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteMedicationsThunk } from "../../redux/thunks/medicationsThunks";

import { IMedication } from "../../redux/types/medicationInterfaces";

export type MedicationProps = {
  medtoshow: IMedication;
};

const Medication = ({ medtoshow }: MedicationProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL as string;

  const navigateToMedicationDetails = () => {
    navigate(`/medications/${medtoshow.id}`);
  };
  const handleImageError = (error: any) => {
    let defaultSrc = medtoshow.defaultImage
      ? medtoshow?.defaultImage
      : "/backup.png";
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = defaultSrc as string;
  };
  const handleDelete = () => {
    dispatch(deleteMedicationsThunk(medtoshow.id));
    navigate(`/medications`);
  };
  return (
    <>
      <li className="container list-none" key={medtoshow.id}>
        <div className="py-6 px-8">
          <div className="flex max-w-lg shadow-lg rounded-lg mx-auto bg-white border border-gray-300 overflow-hidden md:max-w-2xl">
            <div className="w-1/3 bg-cover">
              <img
                src={`${url}images/${medtoshow.image}`}
                onError={handleImageError}
                alt={medtoshow.title}
                className="lg:h-48 md:h-36 w-full pb-2 mt-3 px-1 object-cover object-center scale-110 transition-all duration-400 hover:scale-100 pt-3 md:object-scale-down"
              ></img>
            </div>
            <div className="w-2/3 p-4">
              <h1 className="text-gray-800 font-semibold text-xl capitalize text-center">
                {medtoshow.title}
              </h1>
              <div className="flex flex-col item-center mt-3">
                <p className="text-gray-700 text-md text-center">
                  Category: {medtoshow.category}
                </p>
              </div>
              <div className="flex justify-evenly pt-10">
                <button
                  onClick={navigateToMedicationDetails}
                  className="bg-teal-500 max-w-md inline-block px-2.5 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Details
                </button>
                <button
                  onClick={handleDelete}
                  type="submit"
                  className="bg-teal-500 max-w-md inline-block px-2.5 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default Medication;
