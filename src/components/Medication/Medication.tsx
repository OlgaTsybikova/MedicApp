import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteMedicationsThunk } from "../../redux/thunks/medicationsThunks";

export type MedicationProps = {
  title?: string;
  image?: string;
  category?: string[];
  prospect?: string;
  description?: string[];
  uses?: string[];
  dosis?: string;
  id: string;
};

const Medication = ({
  title,
  image,
  prospect,
  uses,
  dosis,
  id,
}: MedicationProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteMedicationsThunk(id));
  };

  return (
    <li className="container">
      <div className="py-6 px-8">
        <div className="flex max-w-md shadow-lg rounded-lg mx-auto bg-white overflow-hidden md:max-w-2xl">
          <div className="w-1/3 bg-cover">
            <img
              src={image}
              alt={title}
              className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 pt-2"
            ></img>
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{uses}</p>
            <a href={prospect} className="text-1 text-cyan-800 font-medium">
              Read Prospect here
            </a>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-regular text-xs">{dosis}</h1>
              <button className="button bg-emerald-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2">
                Add
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
