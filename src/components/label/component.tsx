import React from "react";
import { Label } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseDown?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseUp?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseMove?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseOver?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseOut?: React.MouseEventHandler<HTMLLabelElement>;
  onFocus?: React.FocusEventHandler<HTMLLabelElement>;
  onBlur?: React.FocusEventHandler<HTMLLabelElement>;
  onChange?: React.ChangeEventHandler<HTMLLabelElement>;
};

const CustomLabel = ({ ...props }: props) => {
  return (
    <Label
      id={props.id}
      onClick={props.onClick}
      className={cn("text-xs text-foregroud-primary", props.className)}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseMove={props.onMouseMove}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={props.onChange}
      htmlFor={props.htmlFor}
    >
      {props.children}
    </Label>
  );
};

export default CustomLabel;
