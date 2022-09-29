import { createContext } from "react";

interface IScreenContext {
  isTablet: boolean;
}

const defaultState = {
  isTablet: false,
};

const ScreenContext = createContext<IScreenContext>(defaultState);

export default ScreenContext;
