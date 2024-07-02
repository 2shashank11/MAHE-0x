import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../icons/EyeFilledIcons";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { LockIcon } from "../icons/LockIcon";

export default function PasswordInput(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      required
      onChange={props.handlePasswordInput}
      name="password"
      label="Password"
      variant="flat"
      placeholder="Enter your password"
      endContent={
        <div className="flex items-center">
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        </div>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
}
