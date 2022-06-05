import axios from "axios";
import { loadMedicationsActionCreator } from "../features/medicationsSlice";
import mockmeds from "../mocks/mockmeds";
import { loadMedicationsThunk } from "./medicationsThunks";

describe("Given a medicationsThunk", () => {
  describe("When loadmedicationsThunk it's invoked and receives a list of meds", () => {
    test("Then it should call dispatch with loadMedicationsActionCreator whit that list", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadMedicationsActionCreator(mockmeds);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: mockmeds,
        status: 200,
      });

      const thunk = await loadMedicationsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
