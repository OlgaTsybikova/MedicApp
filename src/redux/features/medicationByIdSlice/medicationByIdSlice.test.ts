import mockmeds from "../../mocks/mockmeds";
import { IMedication } from "../../types/medicationInterfaces";
import medicationByIdSlice, {
  getMedicationByIdActionCreator,
} from "./medicationByIdSlice";

describe("Given a load medication by Id uiSlice", () => {
  describe("When its invoked with loadAction creator", () => {
    test("Then it should return the new medication state with the received info", () => {
      const initialState: IMedication = {
        title: "",
        image: "",
        category: "",
        uses: "",
        treatment: false,
        id: "",
        owner: "",
      };
      const medicationInfo = mockmeds[0];
      const expectedState = { ...medicationInfo };

      const loadAction = getMedicationByIdActionCreator(medicationInfo);
      const medicationStatus = medicationByIdSlice(initialState, loadAction);

      expect(medicationStatus).toEqual(expectedState);
    });
  });
});
