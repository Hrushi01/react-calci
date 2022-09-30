import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

function Screen() {
  const {calc}= useContext(CalcContext)

//   const dispi=()=>{
//     if(calc.res&&calc.sign&&calc.num){
// "cisple"
//     }
//     else if(calc.res&&calc.sign){

//     }
//     else if( calc.num && calc.sign){

//     }
//     else if(calc.num){}else if()
//   }

  return <Textfit className="h-17 pl-1 pb-1 mb-1 text-white   bg-emerald-900 Screen" max={50} mode="single">
   {calc.res&&calc.sign&&calc.num?(calc.res+calc.sign+calc.num):(calc.res&&calc.sign ? (calc.res+calc.sign):(calc.num && calc.sign?(calc.sign+calc.num):(calc.num?calc.num:calc.res)))}
     {/* {calc.res?calc.res:( calc.sign &&calc.num ?(calc.sign):(calc.num?calc.num:(calc.sign?calc.sign: calc.res))) } */}
    {/* {calc.sign &&calc.res ?(calc.sign,calc.res):(calc.res?calc.res:calc.num) } */}
    {/* {calc.num?(calc.sign?calc.sign:calc.num):calc.res}{} */}
    {/* <span className="bg-">({calc.res})</span> */}
    </Textfit>;
}

export default Screen;
