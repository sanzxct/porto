import { type ComponentPropsWithoutRef } from "react";
import "./styles.css";

export const Heading = (props: ComponentPropsWithoutRef<"h1">) => {
  return <h1 className="heading" {...props} />;
};
