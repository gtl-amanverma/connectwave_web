import React from "react";
import { Checkbox } from "./ui";
import { Label } from "../label/ui";

type props = {
  text?: string;
  className?: string;
  disabled?: boolean;
  htmlFor?: string;
  id?: string;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  checked?: boolean;
  onError?: boolean;
};

const CustomCheckbox = ({ ...props }: props) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={props.id}
        disabled={props.disabled}
        onChange={props.onChange}
        checked={props.checked}
        className={`${props.onError ? 'border-dangerBorder' : ''}`}
      />
      <Label htmlFor={props.htmlFor} className={`${props.onError ? 'text-dangerForeground' : 'text-foreground'}`}>{props.text}</Label>
    </div>
  );
};

export default CustomCheckbox;
