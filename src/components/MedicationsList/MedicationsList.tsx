import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import { loadMedicationsThunk } from "../../redux/thunks/medicationsThunks";
import { IMedication } from "../../redux/types/medicationInterfaces";
import Medication, { MedicationProps } from "../Medication/Medication";

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
      <ul className="sm:text-center">
        {medicationsList.map((medication: IMedication) => {
          return (
            <Medication
              key={medication.id}
              {...(medication as MedicationProps)}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default MedicationsList;
