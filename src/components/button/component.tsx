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
    <Button
      className={cn(
        "group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]",
        props.className
      )}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
      <BottomGradient />
    </Button>
  );
};

export default CustomButton;
