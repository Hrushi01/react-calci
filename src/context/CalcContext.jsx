import React, { createContext,useState } from 'react'

export const CalcContext = createContext()

function CalcProvider({children}) {
   const [calc,setcalc]=useState({
    sign:'',
    num:0,
    res:0
   });

   const providerVal={
    calc,setcalc
   }

  return (
    <CalcContext.Provider value={providerVal}>
        {children}

    </CalcContext.Provider>
  )
}

export default CalcProvider