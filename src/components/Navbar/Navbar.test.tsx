import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Navbar from "./Navbar";

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      );

      const navbar = screen.getAllByRole("img", { name: "logo" });

      expect(navbar.length).toEqual(expectedNumberOfElements);
    });
    describe("When its invoked and the status is not logged", () => {
      test("Then it should renderize 3 links and one button", () => {
        const expectedLinks = 3;
        let mockLogged = false;
        const mockUserSlice = createSlice({
          name: "user",
          initialState: { logged: mockLogged },
          reducers: {},
        });

        const mockStore = configureStore({
          reducer: { user: mockUserSlice.reducer },
        });

        render(
          <Provider store={mockStore}>
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          </Provider>
        );

        const menuButton = screen.getByRole("button", { name: "menu" });
        const searchButton = screen.getByRole("button", { name: "search" });
        const totalLinks = screen.getAllByRole("link");
        const registerLink = screen.getByRole("link", { name: "Login" });
        const loginLink = screen.getByRole("link", { name: "Register" });
        userEvent.click(menuButton);
        userEvent.click(searchButton);

        expect(registerLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
        expect(totalLinks).toHaveLength(expectedLinks);
      });
    });
    describe("when the text Logout is clicked on", () => {
      test("Then it should dispatch a logout action", async () => {
        let mockLogged = true;
        const mockUserSlice = createSlice({
          name: "user",
          initialState: { logged: mockLogged },
          reducers: {},
        });

        const mockStore = configureStore({
          reducer: { user: mockUserSlice.reducer },
        });

        render(
          <Provider store={mockStore}>
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          </Provider>
        );

        const logoutLink = screen.getByRole("link", { name: "Logout" });
        userEvent.click(logoutLink);
        expect(logoutLink).toBeInTheDocument();
      });
    });
  });
});
