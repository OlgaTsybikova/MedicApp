import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteMedicationsThunk } from "../../redux/thunks/medicationsThunks";

export type MedicationProps = {
  title?: string;
  image?: string;
  category?: string;
  prospect?: string;
  description?: string;
  uses?: string;
  treatment?: boolean;
  id: string;
};

const Medication = ({
  title,
  image,
  prospect,
  uses,
  treatment,
  id,
}: MedicationProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteMedicationsThunk(id));
  };
  const navigate = useNavigate();
  const navigateToEdit = () => {
    navigate(`/update/${id}`);
  };

  return (
    <li className="container">
      <div className="py-6 px-8">
        <div className="flex max-w-md shadow-lg rounded-lg mx-auto bg-white overflow-hidden md:max-w-2xl">
          <div className="w-1/3 bg-cover">
            <img
              src={`${process.env.REACT_APP_API_URL}images/${image}`}
              alt={title}
              className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 pt-3 md:object-scale-down"
            ></img>
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{uses}</p>
            <a href={prospect} className="text-1 text-cyan-800 font-medium">
              Read Prospect here
            </a>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-regular text-xs">
                {treatment}
              </h1>
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
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Medication;
