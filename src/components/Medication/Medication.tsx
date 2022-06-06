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
  id,
}: MedicationProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteMedicationsThunk(id));
  };

  return (
    <li className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              ></img>
              <div className="p-6">
                <h2 className="tracking-widest text-lg title-font font-bold text-gray-700 mb-1">
                  {title}
                </h2>

                <h3 className="title-font text-lg font-medium text-gray-700 mb-3">
                  <a
                    href={prospect}
                    className="text-1 text-cyan-800 font-medium"
                  >
                    Read Prospect here
                  </a>
                </h3>
                <p className="leading-relaxed mb-3">{uses}</p>

                <div className="flex items-center flex-wrap ">
                  <button className="bg-emerald-300 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2">
                    Add to your Aid Kit
                  </button>
                </div>
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={handleDelete}
                    className="bg-emerald-300 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg border-2"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Medication;
