import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface LabelledInputTypes {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const LabelledInputs = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputTypes) => {
  return (
    <div className="flex flex-col gap-3">
      <Label>{label}</Label>
      <Input type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
