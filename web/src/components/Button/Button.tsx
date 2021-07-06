import React, { ButtonHTMLAttributes } from "react";
import { AnchorHTMLAttributes } from "react";
import * as buttonStyles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...attributes }: ButtonProps) {
  return (
    <button {...attributes} className={buttonStyles.okBtn}>
      {children}
    </button>
  );
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function AnchorButton({ children, ...attributes }: AnchorProps) {
  return (
    <a {...attributes} className={buttonStyles.okBtn}>
      {children}
    </a>
  );
}
