import axios from "axios";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import mockmeds from "../../mocks/mockmeds";
import { medicationByIdThunk } from "./medicationByIdThunks";

describe("Given a medicationByIdThunk function", () => {
  describe("When it's called with a medication id and authorized token", () => {
    test("Then it should call dispatch with loading On and Off ActionCreator", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValueOnce({
        data: mockmeds[0],
      });

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await medicationByIdThunk(mockmeds[0].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });
});
