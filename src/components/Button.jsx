import React, { useContext } from "react";
import {CalcContext} from "../context/CalcContext"

function Button({ value }) {
  const{calc,setcalc}=useContext(CalcContext);

    const getStyle=btn=>{
      const className ={
        '=':'equal',
        'AC':'ac',
      }
      return className[btn]
    }
// click number

    const handelClickBut=()=>{
      const numberString = value.toString()
      let numberValue;
      if(numberString ==='0'&& calc.num === 0 ){
        numberValue='0'
      }else{
        numberValue=Number(calc.num + numberString)
      }
      setcalc({
        ...calc,
        num:numberValue
      })      

    }

    //decimal clicked
    const decimalClick=()=>{
      setcalc({
        ...calc,
        num:'.'
        // num: !calc.num.toString().includes('.')? calc.num+ value:calc.num
      })

    }
    //reset clicked
    const resetClick=()=>{
      setcalc({sign:'',num:0,res:0})
    }

    //sign clicked
    const signClick=()=>{
      setcalc({
        sign:value,
        res:!calc.res && calc.num ? calc.num : calc.res,
        num:0

      })
    }
    //equal clicked
    const equalClick=()=>{
      if(calc.num && calc.res){

        const math=(a,b,sign)=>{
          const result={
            '/':(a,b)=>a/b,
            '*':(a,b)=>a*b,
            '+':(a,b)=>a+b,
            '-':(a,b)=>a-b,
            
          }
         return result[sign](a, b);
        }
        
              setcalc({
                res:math(calc.res,calc.num,calc.sign),
                sign:'',
                num:0
              })
      }


    }

    const handelClick=()=>{
      const results={
        '.':decimalClick,
        'AC':resetClick,
        '/':signClick,
        '+':signClick,
        '-':signClick,
        '*':signClick,
        '=':equalClick,
        'DEL':resetClick
      }
      if(results[value]){
        return results[value]()
      }else{
        return handelClickBut()
      }
    }



  return (
    <button 
    onClick={()=>{handelClick()}}
      className={`${getStyle(value)} bg-teal-200 opacity-50 h-16 p-2 flex  justify-center content-center text-2xl font-medium  hover:bg-blue-100 hover:border-dotted border-black `}
    >
      {value}
    </button>
  );
}




export default Button;
