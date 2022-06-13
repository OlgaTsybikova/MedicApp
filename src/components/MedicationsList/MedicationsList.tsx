import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import { loadMedicationsThunk } from "../../redux/thunks/medicationsThunks";
import { IMedication } from "../../redux/types/medicationInterfaces";
import Medication from "../Medication/Medication";

const MedicationsList = (): JSX.Element => {
  const medicationsList = useAppSelector(
    (state: RootState) => state.medications
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMedicationsThunk());
  }, [dispatch]);
  return (
    <div>
      <ul className="">
        {medicationsList.map((medication: IMedication) => (
          <Medication key={medication.id} medtoshow={medication} />
        ))}
      </ul>
    </div>
  );
};
export default MedicationsList;
