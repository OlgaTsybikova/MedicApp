import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { createMedicationThunk } from "../../redux/thunks/medicationsThunks";
import { IMedication } from "../../redux/types/medicationInterfaces";
import MedicationFormStyled from "./MedicationFormStyled";

const MedicationForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  const emptyFields: IMedication = {
    title: "",
    category: "",
    image: "",
    uses: "",
    treatment: false,
    id: "",
    owner: userId,
  };

  const [formData, setFormData] = useState<IMedication>(emptyFields);

  const updateData = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const selectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value?.[0] || "",
    });
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
  };

  const submitMedicationForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newMedication = new FormData();
    newMedication.append("title", formData.title);
    newMedication.append("category", formData.category);
    newMedication.append("uses", formData.uses);
    newMedication.append("treatment", formData.treatment.toString());
    newMedication.append("image", formData.image);

    dispatch(createMedicationThunk(newMedication));
    setFormData(emptyFields);
  };

  return (
    <MedicationFormStyled className="sm:px-6 lg:px-8">
      <form
        className="mt-8 space-y-6 max-w-md"
        action="#"
        method="POST"
        autoComplete="off"
        noValidate
        onSubmit={submitMedicationForm}
      >
        <h1 className="text-3xl text-cyan-800 font-bold">Create Medication</h1>
        <div className="relative group">
          <input
            name="text"
            className="create-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="text"
            id="title"
            value={formData.title}
            onChange={updateData}
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="transform transition-all absolute top-0 left-0 h-full flex text-gray-500 items-center pl-2 text-lg group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Title
          </label>
        </div>

        <div className="relative group">
          <label
            htmlFor="category"
            className="inline-block mb-2 text-gray-500"
          ></label>
          <select
            id="category"
            onChange={selectChange}
            autoComplete="off"
            defaultValue={""}
            multiple={false}
            className="form-select rounded-2xl block w-full h-14 px-4 peer border border-gray-300 focus:z-10 mt-1 text-gray-500"
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option>Category 2</option>
            <option>Category 2</option>
            <option>Category 2</option>
          </select>
        </div>

        <div className="flex justify-center mt-8">
          <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
            <div className="m-4">
              <label className="inline-block mb-2 text-gray-500">
                File Upload
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-600 group-hover:text-gray-600"
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
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file
                    </p>
                  </div>
                  <input
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
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Uses
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
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
          <span className="text-gray-700">Treatment</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="treatment"
                value="active"
                onChange={updateData}
              ></input>
              <span className="ml-2">Active</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="treatment"
                value="inactive"
                onChange={updateData}
              ></input>
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            type="submit"
            className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create
          </button>
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
