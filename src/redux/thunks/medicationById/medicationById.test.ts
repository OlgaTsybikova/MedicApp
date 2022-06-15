import { medicationByIdThunk } from "./medicationByIdThunks";

describe("Given a loadMedicationThunk function", () => {
  describe("When it's called with a record id and authorized token", () => {
    test("Then it should dispatch the loadMedicationActionCreator with the record info from the api", async () => {
      const dispatch = jest.fn();
      const mockId = "1";
      window.localStorage.setItem("token", "token");

      const thunk = medicationByIdThunk(mockId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called with a record id 4 not present in thye database", () => {
    test("Then it should not dispatch the loadRecordActionCreator", async () => {
      const dispatch = jest.fn();
      const recordId = "4";

      window.localStorage.setItem("token", "token");

      const thunk = medicationByIdThunk(recordId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
