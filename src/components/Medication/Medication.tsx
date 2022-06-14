import { useNavigate } from "react-router-dom";

import { IMedication } from "../../redux/types/medicationInterfaces";

export type MedicationProps = {
  medtoshow: IMedication;
};

const Medication = ({ medtoshow }: MedicationProps): JSX.Element => {
  const navigate = useNavigate();
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
              <div className="flex item-center justify-between mt-3">
                <p className="text-gray-600 text-md text-center">
                  Category: {medtoshow.category}
                </p>
              </div>
              <div className="flex justify-evenly pt-10">
                <button
                  onClick={navigateToMedicationDetails}
                  className="button bg-emerald-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2"
                >
                  Details
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
