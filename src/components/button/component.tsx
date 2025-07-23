import React from "react";
import { BottomGradient } from "../bottom_gradient/ui";
import { Button } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({ ...props }: props) => {
  return (
    <button
      className={cn(
        "group/btn relative flex w-full h-12 items-center justify-center space-x-2 rounded-md bg-btnBackground px-4 py-4 font-normal text-btnForeground",
        props.className
      )}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
      <BottomGradient />
    </button>
  );
};

export default CustomButton;
