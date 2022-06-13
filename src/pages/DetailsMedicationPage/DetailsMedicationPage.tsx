import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Medication from "../../components/Medication/Medication";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { medicationByIdThunk } from "../../redux/thunks/medicationById/medicationByIdThunks";

const DetailsMedicationPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const medication = useAppSelector((state) => state.medication);

  useEffect(() => {
    dispatch(medicationByIdThunk(id as string));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col items-center">
      <Medication medtoshow={medication} />
    </div>
  );
};
export default DetailsMedicationPage;
