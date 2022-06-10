import mockmeds from "../mocks/mockmeds";
import medicationsSlice, {
  createMedicationActionCreator,
} from "./medicationsSlice";
describe("Given a create medication slice", () => {
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
});
