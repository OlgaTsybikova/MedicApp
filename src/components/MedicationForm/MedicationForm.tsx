import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  createMedicationThunk,
  updateMedicationThunk,
} from "../../redux/thunks/medicationsThunks";
import { IMedication } from "../../redux/types/medicationInterfaces";
import MedicationFormStyled from "./MedicationFormStyled";

const MedicationForm = (): JSX.Element => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { medications } = useAppSelector((state) => state);

  const currentMedication = medications.find(
    (medication: { id: string }) => medication.id === id
  );

  const emptyFields: IMedication = {
    title: currentMedication?.title || "",
    category: currentMedication?.category || "",
    image: currentMedication?.image || "",
    uses: currentMedication?.uses || "",
    treatment: currentMedication?.treatment || false,
    id: currentMedication?.id || "",
    owner: currentMedication?.id || "",
  };

  const [formData, setFormData] = useState<IMedication>(emptyFields);

  const updateData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
  };

  const submitMedicationForm = (event: React.FormEvent) => {
    event.preventDefault();

    const newMedication = new FormData();
    newMedication.append("title", formData.title);
    newMedication.append("category", formData.category);
    newMedication.append("uses", formData.uses);
    newMedication.append("treatment", formData.treatment.toString());
    newMedication.append("image", formData.image);

    if (id) {
      dispatch(updateMedicationThunk(id, newMedication));
    } else {
      dispatch(createMedicationThunk(newMedication));
    }

    setFormData(emptyFields);
    navigate("/medications");
  };

  return (
    <MedicationFormStyled className="sm:px-6 lg:px-8">
      <form
        className="mt-8 space-y-6 max-w-md"
        action="#"
        autoComplete="off"
        encType="multipart/form-data"
        noValidate
      >
        {!id && (
          <h1 className="text-center text-3xl text-cyan-800 font-bold">
            Create Medication
          </h1>
        )}
        {id && (
          <h1 className="text-center text-3xl text-cyan-800 font-bold">
            Update Medication
          </h1>
        )}
        <div className="relative group mt-5">
          <input
            name="title"
            className="create-form w-full h-14 px-4 text-lg peer border border-gray-400 placeholder-gray-500 text-gray-900 focus:z-10"
            type="text"
            id="title"
            value={formData.title}
            onChange={updateData}
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="transform transition-all absolute top-0 left-0 h-full flex text-gray-600 items-center pl-2.5 text-lg group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Title
          </label>
        </div>

        <div className="relative group">
          <label
            htmlFor="category"
            className="inline-block mb-2 text-gray-600"
          ></label>
          <select
            id="category"
            onChange={updateData}
            autoComplete="off"
            defaultValue={""}
            multiple={false}
            className="form-select transition ease-in-out text-lg rounded-2xl block w-full h-14 px-4 peer border border-gray-400 focus:z-10 placeholder-gray-500 mt-1 text-gray-900 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option value="Analgesic">Analgesic, pain</option>
            <option value="Indigestion">Indigestion, heartburn</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Antibiotic">Antibiotic</option>
            <option value="Antidepressant">Antidepressant</option>
            <option value="Antidiarrheal">Antidiarrheal</option>
            <option value="Nausea">Nausea and vomitting</option>
            <option value="Blood Pressure">BloodPressure</option>
            <option value="Inflammation">Inflammation</option>
            <option value="Antineoplastic">
              Antineoplastic - cancer treatment
            </option>
            <option value="Fever">Fever</option>
            <option value="Cold Cure">Cold Cure</option>
            <option value="Cough">Cough</option>
            <option value="Asthma">Asthma</option>
            <option value="Sleep">Sleep</option>
            <option value="Vitamins">Vitamins</option>
          </select>
        </div>

        <div className="create-form flex justify-center mt-8">
          <div className="max-w-2xl rounded-lg border border-gray-400 shadow-xl">
            <div className="m-4">
              <label
                htmlFor="image"
                className="inline-block mb-2 text-lg text-gray-700"
              >
                {emptyFields.image ? emptyFields.image : "File Upload"}
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-21 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-600 group-hover:text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-md tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file
                    </p>
                  </div>
                  <input
                    id="image"
                    type="file"
                    onChange={uploadImage}
                    className="opacity-0"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 w-full">
            <label
              htmlFor="uses"
              className="form-label mb-2 text-gray-700 text-lg"
            >
              Usage and Description
            </label>
            <textarea
              className="
              h-20
        form-control
        block
        w-full
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-400
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700
      "
              id="uses"
              value={formData.uses}
              placeholder=""
              onChange={updateData}
              autoComplete="off"
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-gray-700 text-lg">Treatment</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="treatment"
                onChange={updateData}
                value={formData.treatment.toString()}
              ></input>
              <span className="ml-2">Start treatment</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="treatment"
                value="notnow"
                onChange={updateData}
              ></input>
              <span className="ml-2">Not now</span>
            </label>
          </div>
        </div>
        <div className="flex space-x-2 justify-center">
          {!id && (
            <button
              type="submit"
              onClick={submitMedicationForm}
              className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create
            </button>
          )}
          {id && (
            <button
              type="submit"
              onClick={submitMedicationForm}
              className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Edit
            </button>
          )}
        </div>
        <p>
          Want to search one?{" "}
          <Link to={"/medications"} className="text-1 text-cyan-800 font-bold">
            Search
          </Link>
        </p>
      </form>
    </MedicationFormStyled>
  );
};
export default MedicationForm;
