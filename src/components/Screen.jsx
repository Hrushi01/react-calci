import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

function Screen() {
  const {calc}= useContext(CalcContext)

  return <Textfit className="h-17 pl-1 pb-1 mb-1 text-white   bg-emerald-900 Screen" max={50} mode="single">{calc.num?calc.num:calc.res}</Textfit>;
}

export default Screen;
