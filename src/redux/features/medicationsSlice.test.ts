import mockmeds from "../mocks/mockmeds";
import { IMedication } from "../types/medicationInterfaces";
import medicationsSlice, {
  createMedicationActionCreator,
  deleteMedicationsActionCreator,
  loadMedicationsActionCreator,
} from "./medicationsSlice";
describe("Given a medication slice", () => {
  describe("When it's invoked with an createMedication action with 2 medications and empty fields as inital state", () => {
    test("It should return 3 medictions", () => {
      const expectedLength = 3;

      const initialState = mockmeds;

      const newMedication = {
        title: "Dalsy",
        category: "Body",
        image: "image",
        owner: "629684abc46cf477e7ca7009",
        uses: "Active Ingredient: Ibuprofen 200 mg, For ages 12 years or over",
        treatment: false,
        id: "3",
      };

      const createAction = createMedicationActionCreator(newMedication);

      const medicationStatus = medicationsSlice(initialState, createAction);

      expect(medicationStatus).toHaveLength(expectedLength);
    });
  });
  describe("When its invoked with loadAction creator", () => {
    test("Then it should return the new medication state with the received info", () => {
      const initialState: IMedication[] = [];
      const medicationInfo = mockmeds;
      const expectedState = [...medicationInfo];

      const loadAction = loadMedicationsActionCreator(medicationInfo);
      const medicationStatus = medicationsSlice(initialState, loadAction);

      expect(medicationStatus).toEqual(expectedState);
    });
  });
  describe("When it receives in initial state with 2 medications and delete action", () => {
    test("Then it should return a list of medications without the one", () => {
      const expectedLength = 1;
      const initialState = mockmeds;
      const deleteAction = deleteMedicationsActionCreator(mockmeds[0].id);
      const medicationStatus = medicationsSlice(initialState, deleteAction);
      expect(medicationStatus).toHaveLength(expectedLength);
    });
  });
});
