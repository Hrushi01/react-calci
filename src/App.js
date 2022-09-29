import React from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnVal = [
  ["AC", "DEl", "/"],
  [1, 2, 3, "*"],
  [4, 5, 6, "+"],
  [7, 8, 9, "-"],
  [".", 0, "="],
];

function App() {
  return (
    <div className="Whole">
      <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnVal.flat().map((btn, i) => (
            <>
              <Button value={btn} key={i} />
            </>
          ))}
        </ButtonBox>
      </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
