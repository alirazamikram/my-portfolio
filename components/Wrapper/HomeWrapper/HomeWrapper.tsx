import React, { ReactNode } from "react";
import store from "@/redux/store";

import { Provider } from "react-redux";
export type HomeWrapperProps = {
  children: ReactNode;
};
const HomeWrapper = ({ children }: HomeWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default HomeWrapper;
