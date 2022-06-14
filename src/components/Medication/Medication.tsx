import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteMedicationsThunk } from "../../redux/thunks/medicationsThunks";
import { IMedication } from "../../redux/types/medicationInterfaces";

export type MedicationProps = {
  medtoshow: IMedication;
};

const Medication = ({ medtoshow }: MedicationProps): JSX.Element => {
  const { id: medicationIdDetails } = useParams();
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
          <div className="flex max-w-md shadow-lg rounded-lg mx-auto bg-white border border-gray-300 overflow-hidden md:max-w-2xl">
            <div className="w-1/3 bg-cover">
              <img
                src={`${url}images/${medtoshow.image}`}
                onError={handleImageError}
                alt={medtoshow.title}
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 pt-3 md:object-scale-down"
              ></img>
              <h1 className="text-gray-800 font-semibold text-xl capitalize">
                {medtoshow.title}
              </h1>
              <div className="flex item-center justify-between mt-3">
                <p className="mt-2 text-gray-600 text-sm">
                  Category: {medtoshow.category}
                </p>
              </div>
            </div>
            <div className="w-2/3 p-4">
              <div>
                <a
                  href={medtoshow.prospect}
                  className="text-1 text-cyan-800 font-medium"
                >
                  Read Prospect here
                </a>
                <p>Description: {medtoshow.description}</p>
                <h1 className="text-gray-700 font-regular text-xs">
                  Treatment status: {medtoshow.treatment}
                </h1>
              </div>
              <div className="flex justify-evenly pt-10">
                {medicationIdDetails && (
                  <>
                    <button
                      onClick={navigateToEdit}
                      className="button bg-emerald-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={handleDelete}
                      className="button bg-emerald-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2"
                    >
                      Delete
                    </button>
                  </>
                )}
                {!medicationIdDetails && (
                  <button
                    onClick={navigateToMedicationDetails}
                    className="button bg-emerald-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2"
                  >
                    Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default Medication;
