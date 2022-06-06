import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";

describe("Given an App component", () => {
  describe("When invoked with the heading text 'Welcome Back!'", () => {
    test("Then it should render a h1 element with the text 'Welcome Back!'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const text = "Welcome Back!";
      const expectedtext = screen.getByText(text);
      expect(expectedtext).toBeInTheDocument();
    });
  });
});
