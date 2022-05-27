import React from "react";
import { Code } from "./Code"
import { Title } from "./Title";

const components = {
  pre: props => <Code {...props} />,
  wrapper: ({ children }) => children,
}

export { components }