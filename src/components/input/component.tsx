import React from "react";
import LabelInputContainer from "../label_container/component";
import { Label } from "../label/ui";
import { Input } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  title?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
  onMouseUp?: React.MouseEventHandler<HTMLInputElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLInputElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLInputElement>;
  onMouseMove?: React.MouseEventHandler<HTMLInputElement>;
  onMouseOver?: React.MouseEventHandler<HTMLInputElement>;
  onMouseOut?: React.MouseEventHandler<HTMLInputElement>;
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  htmlFor?: string;
};

const CustomInput = ({ ...props }: props) => {
  return (
    <LabelInputContainer>
      <Label htmlFor={props.htmlFor} className={cn("text-white", props.className)}>{props.title}</Label>
      <Input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onMouseMove={props.onMouseMove}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
        value={props.value}
        className={cn("bg-[#e0e0e0fd] outline-none focus-none border-none", props.className)}
      />
    </LabelInputContainer>
  );
};

export default CustomInput;
