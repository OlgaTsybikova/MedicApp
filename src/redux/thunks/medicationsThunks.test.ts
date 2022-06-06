import axios from "axios";
import {
  deleteMedicationsActionCreator,
  loadMedicationsActionCreator,
} from "../features/medicationsSlice";
import mockmeds from "../mocks/mockmeds";
import {
  deleteMedicationsThunk,
  loadMedicationsThunk,
} from "./medicationsThunks";

describe("Given a medicationsThunk", () => {
  describe("When loadmedicationsThunk it's invoked and receives a list of meds", () => {
    test("Then it should call dispatch with loadMedicationsActionCreator with that list", async () => {
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
    describe("When deleteMedicationsThunk is invoked", () => {
      test("Then it should call dispatch with deleteMedicationsActionCreator", async () => {
        const dispatch = jest.fn();
        const expectedAction = deleteMedicationsActionCreator(mockmeds[0].id);
        axios.delete = jest.fn().mockResolvedValueOnce({
          data: mockmeds,
          status: 200,
        });

        const thunk = await deleteMedicationsThunk(mockmeds[0].id);
        await thunk(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});
